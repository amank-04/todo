"use client";
import { useBoardStore } from "@/store/BoardStore";
import { useEffect } from "react";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import Column from "./Column";

export default function Board() {
  const [board, getBoard, setBoard, updateTodoInDB] = useBoardStore((store) => [
    store.board,
    store.getBoard,
    store.setBoard,
    store.updateTodoInDB,
  ]);

  useEffect(() => {
    getBoard();
  }, [getBoard]);

  const handleOnDragEnd = (result: DropResult) => {
    const { destination, type, source } = result;

    if (!destination?.droppableId) return;

    if (type === "column") {
      const enteries = Array.from(board.columns.entries());
      const [removed] = enteries.splice(source.index, 1);
      enteries.splice(destination.index, 0, removed);
      const rearrangedColumns = new Map(enteries);
      setBoard({
        ...board,
        columns: rearrangedColumns,
      });
      return;
    }

    const columns = Array.from(board.columns);
    const startColIndex = columns[Number(source.droppableId)];
    const finalColIndex = columns[Number(destination.droppableId)];

    const startCol: Column = {
      id: startColIndex[0],
      todos: startColIndex[1].todos,
    };
    const finalCol: Column = {
      id: finalColIndex[0],
      todos: finalColIndex[1].todos,
    };

    if (!startCol || !finalCol) return;

    if (source.index === destination.index && startCol === finalCol) return;

    const newTodos = startCol.todos;
    const [movedTodo] = newTodos.splice(source.index, 1);

    if (startCol.id === finalCol.id) {
      newTodos.splice(destination.index, 0, movedTodo);
      const newCol: Column = {
        id: startCol.id,
        todos: newTodos,
      };

      const newColumns = new Map(board.columns);
      newColumns.set(newCol.id, newCol);
      setBoard({ ...board, columns: newColumns });
    } else {
      const finishTodos = Array.from(finalCol.todos);
      finishTodos.splice(destination.index, 0, movedTodo);

      const newCol: Column = {
        id: startCol.id,
        todos: newTodos,
      };

      const newColumns = new Map(board.columns);

      newColumns.set(startCol.id, newCol);
      newColumns.set(finalCol.id, {
        id: finalCol.id,
        todos: finishTodos,
      });

      updateTodoInDB(movedTodo, finalCol.id);

      setBoard({ ...board, columns: newColumns });
    }
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable
        droppableId="board"
        direction="horizontal"
        // {window.innerWidth >= 768 ? "horizontal" : "vertical"}
        type="column"
      >
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto"
          >
            {Array.from(board.columns.entries()).map(([id, column], index) => (
              <Column key={id} id={id} index={index} todos={column.todos} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default function fetchSuggestion(board: Board): string {
  if (board.columns.size === 0) return "";

  const todoCount = board.columns.get("todo")?.todos.length;
  const progressCount = board.columns.get("inprogress")?.todos.length;
  const doneCount = board.columns.get("done")?.todos.length;

  const suggestion = `Hello there, Welcome to Trello Todo App! Here's a summary of your todos. You have ${
    todoCount ? todoCount : "none"
  } todos to do, ${progressCount ? progressCount : "none"} in progress, and ${
    doneCount ? doneCount : "none"
  } are done, Keep up the good work and have a productive day!`;

  return suggestion;
}

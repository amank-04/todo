import { getUrl } from "@/lib/getUrl";
import { useBoardStore } from "@/store/BoardStore";
import { XCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  DraggableProvidedDraggableProps,
  DraggableProvidedDragHandleProps,
} from "react-beautiful-dnd";

type Props = {
  todo: Todo;
  index: number;
  id: TypedColumn;
  innerRef: (e: HTMLElement | null) => void;
  draggableProps: DraggableProvidedDraggableProps;
  dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
};
export default function TodoCard({
  dragHandleProps,
  draggableProps,
  id,
  index,
  innerRef,
  todo,
}: Props) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (todo.image) {
      const res: any = todo.image;
      const data = JSON.parse(res);

      const url = getUrl(data.bucketId, data.fileId);
      if (url) setImageUrl(url.toString());
    }
  }, [todo]);

  const deleteTask = useBoardStore((store) => store.deleteTask);

  return (
    <div
      className="bg-white rounded-md drop-shadow-md space-y-2"
      {...dragHandleProps}
      {...draggableProps}
      ref={innerRef}
    >
      <div className="flex items-center justify-between p-5">
        <p>{todo.title}</p>

        <button
          onClick={() => deleteTask(index, todo, id)}
          className="text-red-500 hover:text-red-600"
        >
          <XCircleIcon className="w-10 h-10" />
        </button>
      </div>
      {imageUrl && (
        <div className="h-full w-full rounded-b-md">
          <Image
            alt="Task Image"
            priority
            src={imageUrl}
            width={400}
            height={200}
            className="w-full object-contain rounded-b-md"
          />
        </div>
      )}
    </div>
  );
}

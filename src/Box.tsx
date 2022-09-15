import { useDrag } from "react-dnd";
import { DnDItem, DND_ITEM_TYPE } from "./data";

interface Props {
  id: string;
}

function Box({ id }: Props) {
  const [{ isDragging }, drag] = useDrag<
    DnDItem,
    unknown,
    { isDragging: boolean }
  >({
    type: DND_ITEM_TYPE,
    item: () => ({
      id,
    }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      id={id}
      className={`dragSource ${isDragging ? "dragging" : ""}`}
      ref={drag}
    />
  );
}

export default Box;

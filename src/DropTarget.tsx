import { ReactNode } from "react";
import { useDrop } from "react-dnd";
import { DnDItem, DND_ITEM_TYPE } from "./data";

interface Props {
  children: ReactNode;
  onDrop: (id: string) => void;
}

function DropTarget({ children, onDrop }: Props): JSX.Element {
  const [, drop] = useDrop<DnDItem, unknown>({
    accept: DND_ITEM_TYPE,
    drop: (item) => {
      onDrop(item.id);
    },
  });

  return (
    <div className="dropTarget" ref={drop}>
      {children}
    </div>
  );
}

export default DropTarget;

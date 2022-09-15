import { useState } from "react";
import Box from "./Box";
import DropTarget from "./DropTarget";

function App() {
  const [draggedItems, setDraggedItems] = useState([
    "dragSource1",
    "dragSource2",
    "dragSource3",
    "dragSource4",
  ]);
  const [droppedItems, setDroppedItems] = useState<string[]>([]);

  function handleDrop(id: string) {
    setDraggedItems(draggedItems.filter((item) => item !== id));
    setDroppedItems([...droppedItems, id]);
  }

  return (
    <div>
      <h1>DnD</h1>

      <div className="dragSources">
        {draggedItems.map((item) => (
          <Box key={item} id={item} />
        ))}
      </div>

      <DropTarget>
        {droppedItems.map((item) => (
          <div key={item} id={item} className="dragSource" />
        ))}
      </DropTarget>
    </div>
  );
}

export default App;

import { useState } from "react";
import { DndProvider } from "react-dnd";
import Box from "./Box";
import DropTarget from "./DropTarget";
import { HTML5Backend } from "react-dnd-html5-backend";

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

      <DndProvider backend={HTML5Backend}>
        <div className="dragSources">
          {draggedItems.map((item) => (
            <Box key={item} id={item} />
          ))}
        </div>

        <DropTarget onDrop={handleDrop}>
          {droppedItems.map((item) => (
            <div key={item} id={item} className="dragSource" />
          ))}
        </DropTarget>
      </DndProvider>
    </div>
  );
}

export default App;

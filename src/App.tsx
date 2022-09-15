import { DragEvent, useState } from "react";

function App() {
  const [draggedItems, setDraggedItems] = useState([
    "dragSource1",
    "dragSource2",
    "dragSource3",
    "dragSource4",
  ]);
  const [droppedItems, setDroppedItems] = useState<string[]>([]);

  function handleDragStart(e: DragEvent<HTMLElement>) {
    if (!e.dataTransfer) throw new Error("No data transfer");
    if (!(e.target instanceof Element)) throw new Error("Invalid target");

    e.target.classList.add("dragging");

    //Set some data for current drag operation
    e.dataTransfer.setData("text/plain", e.target.id);

    console.log("Dragged element's ID: ", e.dataTransfer.getData("text/plain"));

    //Replace default drag preview with custom image
    let img = new Image();
    img.src = "preview.png";
    e.dataTransfer.setDragImage(img, 10, 10);
  }

  function handleDragOver(e: DragEvent<HTMLElement>) {
    //To treat this element as droppable
    e.preventDefault();
    console.log("dragover");
  }

  function handleDrop(e: DragEvent<HTMLElement>) {
    e.preventDefault();

    if (!e.dataTransfer) throw new Error("No data transfer");

    const dragSourceId = e.dataTransfer.getData("text/plain");
    const dragSource = document.getElementById(dragSourceId);

    if (!dragSource) throw new Error("No drag source");

    setDraggedItems(draggedItems.filter((item) => item !== dragSourceId));
    setDroppedItems([...droppedItems, dragSourceId]);
  }

  return (
    <div>
      <h1>DnD</h1>

      <div className="dragSources">
        {draggedItems.map((item) => (
          <div
            key={item}
            id={item}
            className="dragSource"
            draggable="true"
            onDragStart={handleDragStart}
          />
        ))}
      </div>

      <div
        id="dropTarget"
        className="dropTarget"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {droppedItems.map((item) => (
          <div key={item} id={item} className="dragSource" />
        ))}
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import { Stage, Layer, Rect } from "react-konva";
import { v4 as uuidv4 } from "uuid";

const RestaurantMap = () => {
  const [objects, setObjects] = useState([]);
  const [selectedObject, setSelectedObject] = useState(null);

  const handleObjectClick = (object) => {
    setSelectedObject(object);
  };
  const handleStageClick = (e) => {
    if (selectedObject) {
      const stage = e.target.getStage();
      const position = stage.getPointerPosition();
      const updatedObjects = objects.map((object) => {
        if (object.id === selectedObject.id) {
          return { ...object, x: position.x, y: position.y };
        }
        return object;
      });
      setObjects(updatedObjects);
      setSelectedObject(null);
    }
  };

  const handleImport = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const data = JSON.parse(event.target.result);
      setObjects(data);
    };
    reader.readAsText(file);
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(objects);
    const dataUri =
      "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);
    const link = document.createElement("a");
    link.setAttribute("href", dataUri);
    link.setAttribute("download", "planner.json");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <div>
        <input type="file" onChange={handleImport} />
        <button onClick={handleExport}>Сохранить карту</button>
      </div>
      <div>
        <Stage width={800} height={600} onClick={handleStageClick}>
          <Layer>
            {objects.map((object) => {
              return (
                <Rect
                  key={object.id}
                  x={object.x}
                  y={object.y}
                  width={object.width}
                  height={object.height}
                  fill={object.color}
                  draggable
                  onClick={() => handleObjectClick(object)}
                  onDragMove={(e) => {
                    const updatedObjects = objects.map((obj) => {
                      if (obj.id === object.id) {
                        return { ...obj, x: e.target.x(), y: e.target.y() };
                      }
                      return obj;
                    });
                    setObjects(updatedObjects);
                  }}
                />
              );
            })}
          </Layer>
        </Stage>
      </div>
      <div>
        <button
          onClick={() =>
            setObjects([
              ...objects,
              {
                id: uuidv4(),
                type: "rect",
                x: 100,
                y: 100,
                width: 50,
                height: 50,
                color: "red",
              },
            ])
          }
        >
          Добавить стол
        </button>
      </div>
    </div>
  );
};

export default RestaurantMap;

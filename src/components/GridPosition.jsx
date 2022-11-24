import React, { useState, useRef, useContext } from 'react';
import "../assets/css/GripPosition.css"
import monumentList from '../Data/MonumentList';
import Context from '../contexts/Context';

function GridPosition (){
    const [isSwiping, setSwiping] = useState(false);
    // Action et Drag and Drop functions //
  const dragItem = useRef();
  const dragOverItem = useRef();
    // const [list, setList] = useState(monumentList);
    const [list, setList] = useState(['Item 1','Item 2','Item 3','Item 4','Item 5','Item 6']);
    
    const dragStart = (e, position) => {
        dragItem.current = position;
        console.log(e.target.innerHTML);
      };
    const dragEnter = (e, position) => {
        dragOverItem.current = position;
        console.log(e.target.innerHTML);
    };
    const drop = (e) => {
        const copyListItems = [...list];
        const dragItemContent = copyListItems[dragItem.current];
        copyListItems.splice(dragItem.current, 1);
        copyListItems.splice(dragOverItem.current, 0, dragItemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        setList(copyListItems);
    };

    const { setmoveMap } = useContext(Context);

    return(
        <>
        {list && list.map((item, index) => (
          <div
            className={`Monument-Zone index${index + 1}`}
            key={item[index]}
            style={{
              /* margin: "20px auto",
              textAlign: "center",
              fontSize: "40px", */
              animate: false,
              sticky: false,
              dragx: true,
              dragy: true,
              rotate: false,
              resort: true,
              scale: false,
            }}
            onMouseLeave={setmoveMap}
            onMouseDown={setmoveMap}
            onMouseMove={setmoveMap}
            onMouseUp={setmoveMap}
            onTouchStart={(e) => dragStart(e, index)}
            onTouchMove={(e) => dragStart(e, index)}
            onTouchEnd={drop}
            onDragStart={(e) => dragStart(e, index)}
            onDragEnter={(e) => dragEnter(e, index)}
            onDragEnd={drop}
            draggable>
                {item}
          </div>
        ))}
        </>
    )
}
export default GridPosition;
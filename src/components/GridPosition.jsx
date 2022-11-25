import React, { useState, useRef, useContext } from 'react';
import "../assets/css/GripPosition.css"
import monumentList from '../Data/MonumentList';
import Context from '../contexts/Context';
import ModaleDisplay from '../components/ModaleDisplay';

function GridPosition() {
  const itemRef = useRef();
  // Action et Drag and Drop functions //
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [list, setList] = useState(monumentList);

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
  const { openMouseOver, setOpenMouseOver } = useContext(Context);

  return (
    <> {list && list.map((item, index) => (
      <div
        className={`Monument-Zone index${index + 1}`}
        key={item.id}
        ref={itemRef}
        style={{
          animate: false,
          sticky: false,
          dragx: true,
          dragy: true,
          rotate: false,
          resort: true,
          scale: false,
        }}
        onClick={() => setOpenMouseOver(item.id)}
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
        {console.log(item.picture)}
        <img src={item.icon} alt={item.monumentName} width='70px' heigth='70px' />
        <ModaleDisplay id={item.id} openMouseOver={openMouseOver} setOpenMouseOver={setOpenMouseOver} />
      </div>
    ))}
    </>
  )
}
export default GridPosition;
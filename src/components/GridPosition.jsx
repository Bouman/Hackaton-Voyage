import React, { useState, useRef } from 'react';
import monumentList from '../Data/MonumentList';


function GridPosition (){
    const dragItem = useRef();
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

    return(
        <>
        {list && list.map((item, index) => (
          <div style={{backgroundColor:'lightblue', margin:'20px 25%', textAlign:'center', fontSize:'40px'}}
            key={index}
            draggable>
              {item}
          </div>
        ))}
        </>
    )
}
export default GridPosition;
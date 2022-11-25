
import React, { useState, useRef } from 'react';
import "../assets/css/GripPosition.css"
import monumentList from '../Data/MonumentList';
import ModaleMonuments from './ModaleMonuments';


function GridPosition (){
    // Action et Drag and Drop functions //
  const dragItem = useRef();
  const dragOverItem = useRef();
    const [list, setList] = useState(monumentList);
    const [openMouseOver, setOpenMouseOver] = useState('');
    
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
          <div>
          <div 
            className={`Monument-Zone index${index + 1}`}
            key={item.id}    
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

            onDragStart={(e) => dragStart(e, index)}
            onDragEnter={(e) => dragEnter(e, index)}
            onDragEnd={drop}
            draggable>
              <ModaleMonuments id ={item.id} openMouseOver={openMouseOver} setOpenMouseOver = {setOpenMouseOver} />
          </div>
          
          </div>
        ))}
         
        </>
    )
}
export default GridPosition;

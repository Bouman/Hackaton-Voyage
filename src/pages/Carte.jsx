import React, {useEffect, useRef, useState} from 'react';
import IMG from "../assets/img/carte.png"
import "../assets/css/GripPosition.css"
import monumentList from '../Data/MonumentList';

function Carte() {
const refCarte = useRef(null);
const refMonu = useRef(null);

  // mes Variables
let startY;
let startX;
let scrollLeft;
let scrollTop;
let isDown;

// Mes fonctions scrolling mouse
  function mouseIsDown(e){
    isDown = true;
    startY = e.pageY - refCarte.current.offsetTop;
    startX = e.pageX - refCarte.current.offsetLeft;
    scrollLeft = refCarte.current.scrollLeft;
    scrollTop = refCarte.current.scrollTop;
  }
  function mouseUp(e){
    isDown = false;
  }
  function mouseLeave(e){
    isDown = false;
  }
  function mouseMove(e){
    if(isDown){
      e.preventDefault();
      //Move vertcally
      const y = e.pageY - refCarte.current.offsetTop;
      const walkY = y - startY;
      refCarte.current.scrollTop = scrollTop - walkY;
      refMonu.scrollTop = refCarte.current.scrollTop;

      //Move Horizontally
      const x = e.pageX - refCarte.current.offsetLeft;
      const walkX = x - startX;
      refCarte.current.scrollLeft = scrollLeft - walkX;
      refMonu.scrollLeft = refCarte.current.scrollLeft;
    }
  }

  
  //////Drag and drop
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


  return (
      <>  
        <div 
          className="carte-wrapper"
          ref={refCarte}
          id="items-carte"
          onMouseDown={e => mouseIsDown(e)}
          onMouseUp={e => mouseUp(e)}
          onMouseLeave={e=> mouseLeave(e)}
          onMouseMove={e=> mouseMove(e)}
        >
          {list && list.map((item, index) => (
              <div 
                className={`Monument-Zone index${index + 1}`}
                key={item[index]}
                ref={refMonu}    
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
                  {item}
              </div>
          ))}
        </div>
        <div 
          className="carte-wrapper"
          ref={refCarte}
          id="items-carte"
          onMouseDown={e => mouseIsDown(e)}
          onMouseUp={e => mouseUp(e)}
          onMouseLeave={e=> mouseLeave(e)}
          onMouseMove={e=> mouseMove(e)}
        >
          <img 
            src={IMG} 
            alt="carte">
          </img>
        </div>
    </>
  );
}

export default Carte;
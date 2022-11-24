import React, {useRef} from 'react';
import IMG from "../assets/img/carte.png"
import GridPosition from '../components/GridPosition';

function Carte() {
const refCarte = useRef(null);
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
  
      //Move Horizontally
      const x = e.pageX - refCarte.current.offsetLeft;
      const walkX = x - startX;
      refCarte.current.scrollLeft = scrollLeft - walkX;
    }
  }


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
          <img src={IMG} alt="carte"></img>
        </div>
        <GridPosition />
      </>
  );
}

export default Carte;
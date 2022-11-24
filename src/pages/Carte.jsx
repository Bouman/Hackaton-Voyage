import {useRef} from 'react';
import imgcarte from '../assets/img/carte.png';
import '../assets/css/Carte.css';

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
        className='carte'
        ref={refCarte}
        id="items-carte"  
        onMouseDown={e => mouseIsDown(e)}
        onMouseUp={e => mouseUp(e)}
        onMouseLeave={e=> mouseLeave(e)}
        onMouseMove={e=> mouseMove(e)}
        >
            <img className="item" src={imgcarte} alt="carte"></img>
        </div>
    </>
  );
}

export default Carte;
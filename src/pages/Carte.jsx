import React, {useEffect, useRef, useState, useContext} from 'react';
import IMG from "../assets/img/carte.png";
import GridPosition from '../components/GridPosition';
import Context from "../contexts/Context";

function Carte() {
  const [list, setList] = useState(['Item 1','Item 2','Item 3','Item 4','Item 5','Item 6']);
  const refCarte = useRef(null);
  const refMonu = useRef(null);

  const { moveMap } = useContext(Context);

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

useEffect(() => {
  if(moveMap){
  } else {
  }
}, [moveMap]);

  return (
      <> 
        {moveMap ?
                <div
                className="carte-wrapper"
                ref={refCarte}
                id="items-carte"
                onMouseDown={e => mouseIsDown(e)}
                onMouseUp={e => mouseUp(e)}
                onMouseLeave={e=> mouseLeave(e)}
                onMouseMove={e=> mouseMove(e)} 
                >
                <GridPosition ref={refMonu}/>
                <img src={IMG} alt="carte"></img>
              </div>
        :
                <div
                className="carte-wrapper"
                ref={refCarte}
                id="items-carte" 
        >          <GridPosition ref={refMonu}/>
          <img src={IMG} alt="carte"></img>
        </div>
        }
      </>
  );
}

export default Carte;
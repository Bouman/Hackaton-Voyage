import React, {useState} from "react";
import Carte from "./pages/Carte";
import './assets/css/App.css';
import Context from './contexts/Context';
import monumentList from "./Data/MonumentList";
// import title from "./assets/img/title.png";

//rotation du titre
function handleMouseOver(e) {
  e.target.style.transform = "rotate(180deg)";
}

function handleMouseLeave(e) {
  e.target.style.transform = "translate(0,0)";
}

function App() {
  
const [moveMap, setmoveMap] = useState(true);
const [openMouseOver, setOpenMouseOver] = useState(null);

  return (
    <Context.Provider value={{ moveMap, setmoveMap, openMouseOver, setOpenMouseOver }}>
    <div className="App">
        <div className="container">
          <header className='header'>
          </header>
            <Carte />

          <div className='footer'>Hackathon - 2022</div>
        </div>
    </div>
    </Context.Provider>
  );
}

export default App;

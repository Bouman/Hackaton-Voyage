import React, { useState } from "react";
import Carte from "./pages/Carte";
import './assets/css/App.css';
import Context from './contexts/Context';
import monumentList from "./Data/MonumentList";
import ModaleMonuments from "./components/ModaleMonuments";
import "./assets/css/App.css";
import title from "./assets/img/title_reverse.png";

//rotation du titre
function handleMouseOver(e) {
  e.target.style.transform = "rotate(180deg)";
}

function handleMouseLeave(e) {
  e.target.style.transform = "translate(0,0)";
}

function App() {

const [invert, setInvert] = useState(true);
const [moveMap, setmoveMap] = useState(true);
const [openMouseOver, setOpenMouseOver] = useState(null);

  return (
    <Context.Provider value={{ moveMap, setmoveMap, openMouseOver, setOpenMouseOver }}>
      <div className="App">
        <div className="container">
          <header className={invert ? "header" : "footer"}>
            <img src={title} alt="Inversion du titre"/>
          <button onClick={()=> setInvert(!invert)} type="submit" className="btn">
        {" "}
          </button>
          </header>
            <Carte />
             {monumentList.map((e) =>
        <ModaleMonuments {...e} changeTexte={5}/>
            )}
          <footer className={invert? "footer" : "header"}>Hackathon - 2022</footer>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;

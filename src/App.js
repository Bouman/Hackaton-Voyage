import React, { useState } from "react";
import Carte from "./pages/Carte";
import './assets/css/App.css';
import Context from './contexts/Context';
import "./assets/css/App.css";
import title from "./assets/img/title_reverse.png";

function App() {

const [isLoading, setIsLoading] = useState(false);
const [invert, setInvert] = useState(true);
const [moveMap, setmoveMap] = useState(true);
const [openMouseOver, setOpenMouseOver] = useState(null);
const order = ["Statue de l'île de paques", "Statue de la liberté", "Le Christ de Rio", "La Tour de Londres", "La tour Effeil", "Le Colissé", "Les Pyramides", "Le Taj Mahal", "Le Temple de Bouda d'emmeraude"];

  return (
    <Context.Provider value={{ moveMap, setmoveMap, openMouseOver, setOpenMouseOver, order, isLoading, setIsLoading }}>
      <div className="App">
        <div>
          <header className={invert ? "header" : "footer"}>
            <img src={title} alt="Inversion du titre"/>
       <button onClick={()=> setInvert(!invert)} type="submit" className="btn">
          <button onClick={()=> setInvert(!invert)} type="submit" className="btn">
        <img src="https://res.cloudinary.com/dhfjolvv6/image/upload/v1669383136/sablier_wnmoy2.png" alt="sablier" width="50px"/>
          </button>
          </header>
            <Carte />
            <footer className={invert? "footer" : "header"}>Hackathon - 2022
            <div>
                <button onClick={()=> setInvert(!invert)} type="checkbox" className="btn">
              {" "}
                </button>
              </div>
          </footer>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;


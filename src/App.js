import React, {useState} from "react";
import Carte from "./pages/Carte";
import './assets/css/App.css';
import ModaleMonuments from "./components/ModaleMonuments";
import Context from './contexts/Context';
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
  return (
    <Context.Provider value={{ moveMap, setmoveMap }}>
    <div className="App">
        <div className="container">
          <header className='header'>
            {/* <img src={title} alt="title" className="titleImg" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} /> */}
          </header>

            <Carte />
            {  /*  {monumentList.map((e) =>
        <ModaleMonuments {...e} changeTexte={5}/>
            )}*/}

          <div className='footer'>Hackathon - 2022</div>
        </div>
    </div>
    </Context.Provider>
  );
}

export default App;

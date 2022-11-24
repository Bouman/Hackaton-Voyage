import React from "react";
import Carte from "./pages/Carte"
import './assets/css/App.css';
import ModaleMonuments from "./components/ModaleMonuments";
import title from "./assets/img/title.png";

function App() {
  return (
    <div className="App">
        <div className="container">
          <header className='header'>
            <img src={title}/>
          </header>
            <Carte />
            {/* <ModaleMonuments /> */}
          <div className='footer'>FOOTER</div>
        </div>
    </div>
  );
}

export default App;

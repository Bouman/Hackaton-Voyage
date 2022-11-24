import Carte from "./pages/Carte"
import './assets/css/App.css';

function App() {
  return (
    <div className="App">
        <div className="container">
          <header className='header'>
            LE MONDE A L'ENVERS 
          </header>
          <Carte />
          <ModaleMonuments />
          <div className='footer'>FOOTER</div>
        </div>
    </div>
  );
}

export default App;

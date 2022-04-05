import logo from './logo.svg';
import piedra from './piedra.png';
import papel from './papel.png';
import tijera from './tijera.png';
import './App.css';
import './Game.js';

function App() {
  return (
    <div className="App">
      <h1>
          Bienvenido al piedra papel o tijera 
      </h1>
        <img id="user"></img>
        <img id="random"></img>
      <header className="App-header">

        

        <div id="resultado">
          Elije una opcion
        </div>
        
        <button className='boton' id='piedra'>
          <img src={piedra}  className='imagen'/>
        </button>
        <button className='boton' id='papel'>
          <img src={papel}  className='imagen'/>  
        </button>
        <button className='boton' id='tijera'>
          <img src={tijera}  className='imagen'/>
        </button>
        
      </header>
    </div>
  );
}

export default App;

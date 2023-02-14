import './App.css';
import freeCodeCampLogo from './imagenes/FreeCodeCamp_logo.png';
import Boton from './componentes/Boton.jsx';
import Contador from './componentes/Contador.jsx';

function App() {

  const manejarClic = () => {
    console.log("clic");
  }

  const reiniciarContador = () => {
    console.log("reiniciar");
  }


  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img 
        className="freecodecamp-logo" 
        src={freeCodeCampLogo}
        alt="logo de freeCodeCamp" />
      </div>
      <div className="contenedor-principal">
        <Contador 
          numClics="5" />
        <Boton 
          texto="Clic"
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Boton 
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;

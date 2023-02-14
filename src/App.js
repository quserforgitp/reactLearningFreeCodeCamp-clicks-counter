import './App.css';
import freeCodeCampLogo from './imagenes/FreeCodeCamp_logo.png';
import Boton from './componentes/Boton.jsx';
import Contador from './componentes/Contador.jsx';
import { useState } from 'react'; // hook para trabajar con estados

function App() {
        // valor a usar como estado , funcion que le hace algo al estado = estado inicial
  const [numClics, setNumClics] = useState(0); 

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };


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
          numClics={numClics} />
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


// https://design-style-guide.freecodecamp.org/#logo guia fcc para disenio
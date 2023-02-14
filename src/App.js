import './App.css';
import freeCodeCampLogo from './imagenes/FreeCodeCamp_logo.png';
import Boton from './componentes/Boton';

function App() {
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img 
        className="freecodecamp-logo" 
        src={freeCodeCampLogo}
        alt="logo de freeCodeCamp" />
      </div>
      <div className="contenedor-principal">
        <Boton 
          texto="Clic"
          esBotonDeClic={true}
          manejarClic={} />
        <Boton 
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={} />
      </div>
    </div>
  );
}

export default App;

import React from "react";

function Boton({ texto, esBotonDeClic, manejarClic }) {
    return (
        <button
            className={ esBotonDeClic ? "boton-click" : "boton-reiniciar" }
            onClick={manejarClic}>
            {texto}
        </button>
    );
}

export default Boton;
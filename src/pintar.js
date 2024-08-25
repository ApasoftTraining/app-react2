import React from 'react';
import ReactDOM from 'react-dom';

import Contenido from './contenido'

function Pintar(boton_pulsado) {  
   
    ReactDOM.render(
        <Contenido boton={boton_pulsado} />,
        document.getElementById('cuerpo')
    );
    console.log('hola')
}

export default Pintar
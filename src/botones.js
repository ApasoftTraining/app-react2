import React from 'react';
import './App.css';
import Pintar from './pintar';


 function Botones() {
    
    return (
    <div>
    <button onClick={(x)=>Pintar("Boton 1")}>
        Boton1 
    </button>
    <br/>
    <button onClick={(x)=>Pintar("Boton2")}>
        Boton2
    </button>
    <br/>

    <button onClick={(x)=>Pintar('Boton 3')}>
        Boton3
    </button>
    </div>
    )



};

export default Botones
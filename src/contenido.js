import React, { Component } from 'react';

import './App.css';


class Contenido extends Component {
    render() {
        return (
            <div>
                <h1>El boton pulsado es {this.props.boton} </h1>

            </div>
        )
    }
}

export default Contenido

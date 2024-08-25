import React, { Component } from 'react';
class Estado extends Component {

    constructor(props) {
      super(props)
      //Inicializar un estado 
      this.state = {
        activado: true
      }
  
      //Bind a las funcciones internas de esta clase
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(state => ({
        activado: !state.activado
      }));
    }
  
    render() {
      return (
        <div className="App">
          <h3>ESTADO</h3>
          <button onClick={this.handleClick}>
            {this.state.activado ? 'ON' : 'OFF'}
          </button>
        </div>
      );
    }
  }

  export default Estado
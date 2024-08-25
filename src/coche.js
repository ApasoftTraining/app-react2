import React, { Component } from 'react';
class Coche extends Component {

  constructor(props) {
    super(props)
    //Inicializar un estado 
    this.state = {
      estado: "parado"
    }

    //Bind a las funcciones internas de esta clase
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect() {
    this.setState(state => ({
      estado:document.getElementById("lista").value
    }));
  }

  render() {
    return (
      <div className="App">
        <h3>ESTADO DEL COCHE</h3>
        <select onChange={this.handleSelect} name="select" id="lista">
          <option value="parado">Parado</option>
          <option value="arrancado" selected>Arrancado</option>
          <option value="marcha">En Marcha</option>
        </select>
        <p> Mi estado es {this.state.estado}</p>
      </div>
    );
  }
}

export default Coche
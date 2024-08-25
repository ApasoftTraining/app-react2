import React from 'react';
import ReactDOM from 'react-dom';


class Formu extends React.Component {
    constructor(props) {
      super(props);
      //Se pueden definir como estados
      this.state = { nombre: 'Alberto',apellido:'', edad:0 };
    }
    mySubmitHandler = (event) => {
      event.preventDefault();
      const pantalla= <h1>{this.state.nombre +" "+ this.state.apellido}{this.state.edad}</h1>;
      ReactDOM.render(       
        pantalla,
        document.getElementById('cuerpo')
      );
    }
    //Funciones para guardar los datos del formulario
    cambioNombre = (event) => {
      this.setState({nombre: event.target.value});
    }
    cambioApellidos = (event) => {
      this.setState({apellido: event.target.value});
    }

    cambioEdad=(event)=>
    {
      this.setState( {edad: event.target.value })
    }
    render() {
      return (
        <form onSubmit={this.mySubmitHandler}>
        <h1>Hola {this.state.nombre}</h1>
        <p>Nombre:</p>
        <input
          type='text'
          onChange={this.cambioNombre}
        />
        <p>Apellidos:</p>
        <input
          type='text'
          onChange={this.cambioApellidos}
        />
        <p> Edad</p>
         <input
          type='number'
          onChange={this.cambioEdad}
        />
        <input
          type='submit'
        />
        </form>
      );
    }
  }

  export default Formu
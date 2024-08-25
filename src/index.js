import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import reportWebVitals from './reportWebVitals';
import Imagen from './Componentes'
import Botones from './botones'
import Estado from './estado'
import Formulario from './formulario'
import Coche from './coche'
import Formu from './formulario1'

ReactDOM.render(
  <React.StrictMode>
    <Imagen />
  </React.StrictMode>,
  document.getElementById('cabecera')
);

ReactDOM.render(
  <React.StrictMode>
    <Botones />
  </React.StrictMode>,
  document.getElementById('nav')
);

ReactDOM.render(
  <React.StrictMode>
    <Formu />
  </React.StrictMode>,
  document.getElementById('pie')
);
/*
ReactDOM.render(
  <Formulario />,
  document.getElementById('pie')
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import Parrafo from "./Parrafo";

const Titulo = () => {
  return (
    <div>
      <h1>Primer Componente</h1>
      <p>Esto es un parrafo de prueba donde vamos a pasar props</p>

      <Parrafo numero="1" />
      <Parrafo numero="2" />
      <Parrafo numero="3" />
    </div>
  );
};

export default Titulo;

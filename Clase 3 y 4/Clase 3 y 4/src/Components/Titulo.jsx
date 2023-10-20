import React from "react";
import Subtitulo from "./Subtitulo";

const Titulo = () => {
  return (
    <>
      <h1 className="tituloPrincipal">Bienvenido a la Clase III</h1>
      <Subtitulo 
        info1="Clase de props 💻" />
      <Subtitulo 
        info2="Walter Montoya 💻" />
    </>
  );
};

export default Titulo;

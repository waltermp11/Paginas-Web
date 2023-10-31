import React from "react";

const Title = (props) => {
  //Aca va todo el inicio de la funcion
  return (
    <>
      <h1> Bienvenidos a la Clase 3</h1>
      <h1> - Walter Montoya Presiga </h1>

      <p>{props.info1}</p>
    </>
  );
};

export default Title;

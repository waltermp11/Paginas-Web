import React from "react";

const Array = () => {
  const arrayFrutas = ["Manzana", "Banano", "Pera"];

  return (
    <>
      <h3> Map de Array</h3>
      <ul>
        {arrayFrutas.map((fruta, index) => {
          return <li key={index}> {index} . {fruta}</li>;
        })}
      </ul>
    </>
  );
};

export default Array;

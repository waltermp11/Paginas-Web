import React from "react";

const frutas = ["Mango", "Manzana", "Pïña", "Papaya"];
const Array = () => {
  return (
    <>
      <ul>
        {frutas.map(function (fruta) {
          return (
            // eslint-disable-next-line react/jsx-key
            <li>{fruta}</li>
          );
        })}
      </ul>
    </>
  );
};

export default Array;

import React from "react";

const Objeto = () => {
  const productos = [
    {
      id: 1,
      nombre: "Monitor",
      precio: 500,
    },
    {
      id: 2,
      nombre: "Tarjeta Grafica",
      precio: 1100,
    },
    {
      id: 3,
      nombre: "Perifericos",
      precio: 800,
    },
  ];
  return (
    <>
      <h3>Map de Objetos</h3>
      <ul>
        {productos.map(function (producto) {
          return (
            <li>{producto.id} -{producto.nombre}-  {producto.precio}  </li>
          )
          
        })}
      </ul>
    </>
  );
};

export default Objeto;

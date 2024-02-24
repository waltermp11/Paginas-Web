import React, { useState } from "react";
import { useEffect } from "react";

const Pedidos = ({ pedidos }) => {
  const [listaPedidos, setListaPedidos] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
  }, [pedidos]);

  useEffect(() => {
    if (isLoaded) {
      setListaPedidos(pedidos);
      console.log("hola");
      setIsLoaded(false);
    }
  }, [isLoaded]);

  return (
    <div>
      <ul>
        {listaPedidos.map((pedido, index) => (
          <li key={index}>{pedido.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default Pedidos;

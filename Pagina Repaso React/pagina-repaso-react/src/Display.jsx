import React, { useContext } from "react";
import { CounterContext } from "./context";

const Display = () => {
  const { state } = useContext(CounterContext);
  return (
    <div>
      <h1>Valor Contador : {state.count}</h1>
    </div>
  );
};

export default Display;

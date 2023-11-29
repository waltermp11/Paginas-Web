import React, { useState, useEffect } from "react";

const SetIntervalUseEffect = () => {
  const [cantidad, setCantidad] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setCantidad((prevState) => 
        ++prevState);
    }, 1000);
  }, []);
  return (
    <>
      <h2>Probando useEffect </h2>
      <p>{cantidad} de chocolates</p>
    </>
  );
};

export default SetIntervalUseEffect;

import { useState } from "react";

const ClicksContador = () => {
  const [clicks, setClicks] = useState(0)
  const contador =() => {
    setClicks(clicks + 1)
  }
  return (
    <>
      <button
      onClick={contador} 
      > Contador = {clicks}</button>
    </>
  );
};

export default ClicksContador;

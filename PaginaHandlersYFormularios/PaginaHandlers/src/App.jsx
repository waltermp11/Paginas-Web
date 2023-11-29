import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ComponenteFuncional from "./Components/ComponenteFuncional";
import MouseEvent from "./Components/MouseEvent";
import Formulario from "./Components/Formulario";
import Consigna2 from "./Components/Consigna2";
import TitleUseEffect from "./Components/TitleUseEffect";
import SetIntervalUseEffect from "./Components/SetIntervalUseEffect";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TitleUseEffect />
      <h1>Vamos a Practicar Formularios</h1>
      <ComponenteFuncional />
      {/*Aca teniamos nuestro componente MouseEvent.jsx */}

      <Consigna2 />

      <SetIntervalUseEffect/>
    </>
  );
}

export default App;

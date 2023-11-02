import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Titulos from "./Components/Titulos";
import Lista from "./Components/Lista";
import "./App.css";

function App() {
  //Vamos agregar un objeto vacio como un estado inicial de nuestra aplicacion.
  const [state, setState] = useState({
    likes: 0,
    vistas: 0,
  });

  return (
    <>
      <Titulos />
      <Lista />

      <hr />
      <hr />

      <h2>Creacion de objeto vacio</h2>
      <h1>cantidad de likes {state.likes}</h1>
      <h1>{state.vistas}</h1>

      <button
        onClick={() =>
          setState((prev) => ({
            ...prev,
            likes: prev.likes + 1,
            vistas: prev.vistas + 10,
          }))
        }>
        Agregar Parametros
      </button>
    </>
  );
}

export default App;

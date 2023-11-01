import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ProductoClass from "./Components/ProductoClass";
import ClicksContador from "./Components/ClicksContador";
import "./App.css";

function App() {
  //const [clicks, setClicks] = useState(0); //retorna una funcion que lo actualiza
  //const [nombre, setNombre] = useState("Walter ");
  const [change, setChange] = useState(false);
  const [producto, setProducto] = useState("");

  const cambiador = () => {
    setChange(!change);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Que son los hooks?</h1>

      <ProductoClass />
      <ClicksContador />
      <button onClick={cambiador}>{change ? "Desactivado" : "Activado"}</button>

      <input
        type="text"
        placeholder="Ingresar un producto"
        value={producto}
        onChange={(e) => setProducto(e.target.value)} //Aca estamos cogiendo el valor que le vamos a dar nuestro input!
      />
    </>
  );
}

export default App;

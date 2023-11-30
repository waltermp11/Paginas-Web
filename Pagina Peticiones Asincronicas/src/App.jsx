import "./App.css";
import Fetch from "./Components/Fetch";
import Axios from "./Components/Axios";
import AxiosPokemon from "./Components/AxiosPokemon";
import Boton from "./Components/Boton";
import Contador from "./Components/Contador";

function App() {
  return (
    <>
      <Axios />
      <hr />
      <Boton />
      <hr />
      <Fetch />
      <hr />

      <AxiosPokemon />

      <Contador/>
    </>
  );
}

export default App;

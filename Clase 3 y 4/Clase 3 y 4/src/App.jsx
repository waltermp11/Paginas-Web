import "./App.css";
import Titulo from "./Components/Titulo";
import Subtitulo from "./Components/Subtitulo";
import Article from "./Components/Article";
import Array from "./Components/Array";
import Objeto from "./Components/Objeto";

function App() {
  return (
    <>
      <Titulo />
      <Article 
        mensaje = "Soy un mensaje que pasa por props"
      />
      <footer>
        Todos los derechos reservados para los estudiantes de Front End III 💻💻
      </footer>
      <br></br>
    <Array/>
    <Objeto/>
    </>
  );
}

export default App;

import "./App.css";
import Titulo from "./Components/Titulo";
import Subtitulo from "./Components/Subtitulo";
import Article from "./Components/Article";

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
    </>
  );
}

export default App;

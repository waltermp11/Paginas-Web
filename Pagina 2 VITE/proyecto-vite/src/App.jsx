
import Titulo from './Components/Titulo';
import Article from './Components/Article';
/* import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg"; */
import "./App.css";

function App() {
  const nombre  ="Walter Montoya Presiga ";

  return (
    
    <>
      <Titulo/>
      <Article
        mensaje ="Soy un mensaje que pasa por props"
      />
      <h2>Agregando Componentes 🥁👊🏻</h2>
      <h3>{nombre}</h3>
      </>
  );
}

//Esto es un comentario, al parecer se comenta normal ! 😁😁

export default App;

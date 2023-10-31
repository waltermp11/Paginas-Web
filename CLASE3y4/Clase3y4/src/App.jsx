import Title from "./Components/Title";
import Title2 from "./Components/Title2";
import Footer from "./Components/Footer";
import Article from "./Components/Article";
import Array from "./Components/Array";
import "./App.css";
import Objeto from "./Components/Objeto";

function App() {
  return (
    <>
      <Title info1="Clase de Componentes" />
      <Title2 info2="Clase de Props" />
      <Article mensaje="Soy un mensaje de Props!" />

      <hr></hr>

      <Array />
      <hr></hr>
        <Objeto/>


      <hr></hr>
      <Footer />
    </>
  );
}

export default App;

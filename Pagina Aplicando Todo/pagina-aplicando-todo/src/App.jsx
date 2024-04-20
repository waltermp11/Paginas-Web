import { useState } from "react";
import Layout from "./Components/Layout";
import NavBar from "./Components/NavBar";
import Boddy from "./Components/Body";
import ThemeContext, { themes } from "./context";
import "./App.css";

function App() {
  //Tenemos que haer el seteo del tema
  const [theme, setTheme] = useState(themes.light); //Aca estoy ingresando al objeo que yo cree en mi context, establezco que mi primero estado sera el Light ☀️☀️

  const handlerChangeTheme = () => {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
    //Esto es como un ternario mas largo, si si el estado esta en dark y es true, seteara theme a light ☀️ si es falso, de que mi theme sea light, pues mostrara e ingresara a dark 🌙
  };
  return (
    <div className="App">
      <ThemeContext.Provider value={{ theme, handlerChangeTheme }}>
        <Layout>
          <NavBar />
          <Boddy />
        </Layout>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;

import ThemeContext, { themes } from "./context"; //quiero exportar algo directo, en este caso el objeto
import NavBar from "./Components/NavBar";
import Body from "./Components/Body";
import Layout from "./Components/Layout";
import { useState } from "react";
import "App.css"

function App() {
  const [theme, setTheme] = useState(themes.light); //exporto el default

  //Creamos un handler para pasar los estados, de dark a light
  const handlerChangeTheme = () => {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  };
  return (
    <>
      <div className="App">
        <ThemeContext.Provider value={{ theme, handlerChangeTheme }}>
          {/*lo que esta aca abajo, son los componentes donde aplicaremos lo de darkmode o light mode, cuando usamos el hook useContext */}
          <Layout>
            <NavBar />
            <Body />
          </Layout>
        </ThemeContext.Provider>
      </div>
    </>
  );
}

export default App;

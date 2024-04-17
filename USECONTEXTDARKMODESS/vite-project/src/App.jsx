import ThemeContext, { themes } from "./Context/context";
import Blogs from "./Components/Blogs";
import Home from "./Components/Home";
import Layout from "./Components/Layout";
import Contact from "./Components/Contact";
import { useState } from "react";
import NavBar from "./Components/NavBar";

function App() {
  const [theme, setTheme] = useState(themes.light);
  const handlerChangeTheme = () => {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  };
  return (
    <>
      <div className="App">
        <ThemeContext.Provider value={{ theme, handlerChangeTheme }}>
          <Layout>
            <NavBar/>
            <Home />
            <Blogs />
            <Contact/>
          </Layout>
        </ThemeContext.Provider>
      </div>
    </>
  );
}
export default App;

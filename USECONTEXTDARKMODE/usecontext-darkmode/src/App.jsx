import { useState } from "react";
import "./App.css";
import ReactSwitch from "react-switch";
import { useThemeContext } from "./Context/ThemeContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";

function App() {
  const { contextTheme, setContextTheme } = useThemeContext();
  const [checked, setCheked] = useState(false); //Aca tenemos el control de nuestro componente

  const handleSwitch = (nextChecked) => {
    setContextTheme((state) => (state == "light" ? "dark" : "light"));
    setCheked(nextChecked);
    console.log(nextChecked);
  };

  return (
    <BrowserRouter>
    <div className="App" id={contextTheme}>
      
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element ={<About/>}/>
          </Route>
        </Routes>
      


      <ReactSwitch
        checked={checked}
        onChange={handleSwitch}
        onColor="#86d3ff"
        onHandleColor="#2693e6"
        handleDiameter={30}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={20}
        width={48}
        className="react-switch"
        id="material-switch"
      />

      <p>Dark Mode</p>

      <p>
        Todo esto es un texto de prueba loremx232Todo esto es un texto de prueba
        loremx232Todo esto es un texto de prueba loremx232Todo esto es un texto
        de prueba loremx232Todo esto es un texto de prueba loremx232Todo esto es
        un texto de prueba loremx232Todo esto es un texto de prueba
        loremx232Todo esto es un texto de prueba loremx232Todo esto es un texto
        de prueba loremx232Todo esto es un texto de prueba loremx232Todo esto es
        un texto de prueba loremx232Todo esto es un texto de prueba
        loremx232Todo esto es un texto de prueba loremx232Todo esto es un texto
        de prueba loremx232Todo esto es un texto de prueba loremx232Todo esto es
        un texto de prueba loremx232Todo esto es un texto de prueba
        loremx232Todo esto es un texto de prueba loremx232Todo esto es un texto
        de prueba loremx232Todo esto es un texto de prueba loremx232Todo esto es
        un texto de prueba loremx232Todo esto es un texto de prueba
        loremx232Todo esto es un texto de prueba loremx232Todo esto es un texto
        de prueba loremx232Todo esto es un texto de prueba loremx232Todo esto es
        un
      </p>
    </div>
    </BrowserRouter>
    )
  
}

export default App;

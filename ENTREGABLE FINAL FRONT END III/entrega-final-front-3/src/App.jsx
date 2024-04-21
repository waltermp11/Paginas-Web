import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Footer from "./Components/Footer";
import Home from "./Routes/Home.jsx";
import Favs from "./Routes/Favs.jsx";
import Contact from "./Routes/Contact.jsx";
import Detail from "./Routes/Detail.jsx";
import { useContext, useEffect,useState } from "react";
import { ContextGlobal } from "./Components/utils/globalContext.jsx";

function App() {
  const { state } = useContext(ContextGlobal);
  const [tema,setTheme] =useState (state.theme);
  

  function handleTheme(tema) {
    setTheme(tema)
    console.log(tema);
  }
  useEffect(() => {
    setTheme(state.theme)
    
  }, [state]);
  return (
    <BrowserRouter>
      <div className="App" tema={tema}>
        <Routes>
          <Route path="/" element={<Layout funcionTema={handleTheme}/>}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/favs" element={<Favs />} />
            <Route path="/dentist/:id" element={<Detail />} />
          </Route>
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

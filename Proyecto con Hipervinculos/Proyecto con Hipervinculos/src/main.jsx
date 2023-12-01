import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import InicioSesion from "../src/Components/InicioSesion.jsx"
import "./index.css";
import { BrowserRouter,Routes,Route } from "react-router-dom"; // todos estos pertenecen al mismo paquete

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>  {/*la agregamos nosotros*/}

    <Routes>
      <Route path="/App" element={<App/>}/>
      <Route path="/inicio-sesion" element={<InicioSesion/>}/>

    </Routes>
      
    </BrowserRouter>
  </React.StrictMode>
);

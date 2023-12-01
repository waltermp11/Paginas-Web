import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import InicioSesion from "./Components/InicioSesion.jsx"
import "./index.css";
import { BrowserRouter,Routes,Route } from "react-router-dom"; // todos estos pertenecen al mismo paquete
import NotFount from "./Components/NotFount.jsx";
import Bienvenida from "./Components/Bienvenida.jsx";
import Productos from "./Components/Productos.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>  {/*la agregamos nosotros*/}

    <Routes>
      <Route path='/' element={<App/>}/>;
      <Route path='/inicio-sesion' element={<InicioSesion/>}/>;
      <Route path='/bienvenid@' element ={<Bienvenida/>}/>;
      <Route path='/producto/:id?' element ={<Productos/>}/>;
      <Route path='*' element= {<NotFount/>}/>;

    </Routes>
      
    </BrowserRouter>
  </React.StrictMode>
);

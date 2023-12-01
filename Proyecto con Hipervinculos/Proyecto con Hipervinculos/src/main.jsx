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
      <Route path='/app' element={<App/>}/>
      <Route path='/inicio-sesion' element={<InicioSesion/>}/>
      <Route path='/bienvenid@' element ={<Bienvenida/>}/>
      <Route path='/productos' elements ={<Productos/>}/>
      <Route path='*' elements = {<NotFount/>}/>  {/**Aca estaria redireccionando a nuestra pagina de que tire error! ⛔  * seria porque como no encontro mas rutas, que muestre esa para*/}
      

    </Routes>
      
    </BrowserRouter>
  </React.StrictMode>
);

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";

import "./App.css";
//En este componente de App estamos organizando las rutas de nuestro proyecto. ✅✅✅

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element = {<Home/>}/>
            <Route path="blogs" element={<Blogs/>} />
            <Route path="contact" element={<Contact/>} />
            <Route path="*" element={<NoPage/>} />  
          </Route>
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;

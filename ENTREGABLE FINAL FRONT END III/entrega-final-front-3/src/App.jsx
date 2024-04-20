import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Footer from "./Components/Footer";
import Home from "./Routes/Home.jsx";
import Favs from "./Routes/Favs.jsx";
import Contact from "./Routes/Contact.jsx";
import Card from "./Components/Card.jsx";
import Detail from "./Routes/Detail.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
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

import React from "react";
import { useContext } from "react";
import ThemeContext from "../context";

//Layout en este caso seria el Padre de NavBar y del otor componente Body ✅
//Nosotros aca importamos el useContext, para poder usar el ThemeContext
const Layout = ({ children }) => {

  const {theme} = useContext(ThemeContext); //Extraemos theme
  return <div style={{backgroundColor:theme.backgroundColor, color:theme.color,}}>{children}
  <butto></butto>
  </div>;
};

export default Layout;

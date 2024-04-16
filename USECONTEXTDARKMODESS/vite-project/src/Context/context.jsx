//Creamos el contexto y creamos al objeto que tiene los estilos

import { createContext } from "react";
export const themes = {
    //Aca tenemos los dos modos!
  light: {
    font: "black",
    background: "white",
  },
  dark: {
    font: "white",
    background: "black",
  },
};
const ThemeContext = createContext(themes.light);
export default ThemeContext;

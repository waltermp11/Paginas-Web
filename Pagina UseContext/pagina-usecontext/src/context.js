//Aca tenemos el script donde vamos a tener los dos objetos, estilos de oscuro o claro, creamos la nube
import { createContext } from "react";

export const themes = {
  light: {
    font: "black",
    background: "white",
  },

  dark: {
    font: "white",
    background: "black",
  },
};

const ThemeContext = createContext(themes.light); //valor inicial
export default ThemeContext;

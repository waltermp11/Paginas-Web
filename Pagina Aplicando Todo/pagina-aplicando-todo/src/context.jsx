//Lo primero que hacemos es hacer el contexto!
import { createContext } from "react";
export const themes = {
  light: {
    //Aca nosotros creamos los colores  con lso atributos.
    color: "black",
    backgroundColor: "white",
    fontColorButtonWhite: "black",
    backgroundColorButton: "gray",
  },
  dark: {
    color: "white",
    backgroundColor: "black ",
    backgroundColorButton: "#646cff",
    fontColorButtonWhite: "white"
  },
};

//creamos el contexto
const ThemeContext = createContext(themes.light); //exige como parametro que le pasemos un estado inicial 1️⃣
//Todos los componentes que esten en el ThemeContext, van hacer los que puedan acceder a la nube. ✅✅
export default ThemeContext;

import React from "react";
import { useContext } from "react";
import ThemeContext, { themes } from "../context";

const NavBar = () => {
  //Cada vez que yo tenga usar el context, en este caso sera al boton solo
  const { theme, handlerChangeTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>Home 🏠</p>
      <button
        onClick={handlerChangeTheme}
        style={{
          backgroundColor: theme.backgroundColorButton,
          color: theme.fontColorButtonWhite,
        }}
      >
        ☀️ Cambiar Tema 🌑
      </button>
    </div>
  );
};

export default NavBar;

import { useContext } from "react";
import ThemeContext from "../context";
import "../App.css";

const NavBar = () => {
  const { theme, handlerchangetheme } = useContext(ThemeContext);

  return (
    <div>
      <p>Home</p>
      <button
        onClick={handlerchangetheme}
        style={{ background: theme.background, color: theme.font }}
      >
        Cambiar Tema
      </button>
    </div>
  )
}

export default NavBar;

import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextGlobal } from "./utils/globalContext";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Layout = ({ funcionTema }) => {
  const { action, state } = useContext(ContextGlobal);
  return (
    <>
      <header className="header">
        <div className="logo-dh-odonto">
          <h1> DH Hospital</h1>
        </div>

        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Home 🏠</Link>
            </li>
            <li>
              <Link to="/contact">Contact 📩</Link>
            </li>
            <li>
              <Link to="/favs">Favs ❤️</Link>
            </li>
          </ul>
          <button
            onClick={() => {
              action({ type: "CAMBIAR_TEMA" });
              funcionTema(state.theme);
            }}
          >
            Change Theme
          </button>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;

import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Layout = () => {
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
          <button>Change theme</button>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;

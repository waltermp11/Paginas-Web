import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/blogs"> Blogs</Link>
          </li>
          <li>
            <Link to="/contact"> Contacto</Link>
          </li>
        </ul>
      </nav>

      <Outlet/> 
    </>
  );
}
export default Layout;

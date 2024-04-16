/* eslint-disable react/prop-types */
import React from "react";
import { useContext } from "react";
import ThemeContext from "../Context/context";
import { Outlet, Link } from "react-router-dom";

const Layout = ({children}) => {
  const{theme} = useContext(ThemeContext)
  return (
    <div style={{background:theme.background, color:theme.font}}>

      
      <nav>
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/blogs"> Blogs</Link>
          </li>
          <li>
            <Link to="contact"> Contact</Link>
          </li>
        </ul>
      </nav>
      {children}
      <Outlet />
    </div>
  );
};

export default Layout;

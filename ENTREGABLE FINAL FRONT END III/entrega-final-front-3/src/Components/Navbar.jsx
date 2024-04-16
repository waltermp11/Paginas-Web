import React from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  return (
    <>
      <header className="header">

        <div className="logo-dh-odonto">
          <h1> DH Hospital</h1>

        </div>

        <div>

        </div>
        <nav className="nav">
          {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
          {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

          <ul>
            <li> Home</li>
            <li> Contact</li>
            <li> Favs</li>
          </ul>
          <button>Change theme</button>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

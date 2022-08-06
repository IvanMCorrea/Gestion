import React from "react";
import { Link } from "react-router-dom";
//import { exportDataToFirestore } from "../services/firestore";

const NavBar = () => {
  return (
    <nav className="navBar">
      <ul className="navBar__list">
        <Link to="/">
          <div className="navBar__logo">
            <h1 className="navBar__logo--title"> Inventario</h1>
          </div>
        </Link>
        <li>
          <Link to="/" className="navBar__list--category">
            Productos
          </Link>
          <Link
            to="/contacto"
            className="navBar__list--category"
            /* onClick={exportDataToFirestore()} */
          >
            Copia de seguridad
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

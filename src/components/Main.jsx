import React, { useState, useEffect } from "react";
import TableNav from "./TableNav";
import listaProductos from "../data/db.json";
import TableBody from "./TableBody";
//import { traerProductos } from "../services/firestore";

const Main = () => {
  const [productos, setProductos] = useState([]);
  const [renderizar, setRenderizar] = useState(false);
  useEffect(() => {
    setProductos(listaProductos);
    if (productos !== "") {
      setRenderizar(true);
    }
  }, [productos]);
  const renderizarCod = () => {
    if (productos !== "") {
      return (
        <>
          <TableNav prods={productos} />
          <TableBody prods={productos} />
        </>
      );
    } else {
      return <div>NADA</div>;
    }
  };
  return <div>{renderizar === true ? renderizarCod() : null}</div>;
};
export default Main;

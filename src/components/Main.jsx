import React, { useState, useEffect } from "react";
import TableNav from "./TableNav";
import TableBody from "./TableBody";
import { traerProds } from "../services/firestore";

const Main = () => {
  const [productos, setProductos] = useState([]);
  const [renderizar, setRenderizar] = useState(false);
  useEffect(() => {
    traerProds()
      .then((res) => {
        setProductos(res);
      })
      .then(() => {
        if (productos !== "") {
          setRenderizar(true);
        }
      });
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

import React, { useState, useEffect } from "react";
import { traerCategorias, traerSubCategorias } from "../services/firestore";

const TableNav = ({ prods }) => {
  const [categorias, setCategorias] = useState([]);
  const [subcategorias, setSubCategorias] = useState([]);
  useEffect((prods) => {
    traerCategorias().then((res) => {
      if (prods !== "") {
        setCategorias(res);
      }
    });
  }, []);
  useEffect((prods) => {
    traerSubCategorias().then((res) => {
      if (prods !== "") {
        setSubCategorias(res);
      }
    });
  }, []);
  return (
    <>
      <div>
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
          Inventario
        </h1>
        <select name="categorias">
          <option value="all">Todos los productos</option>
          {categorias !== ""
            ? categorias.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))
            : null}
        </select>
      </div>
      <div>
        <select name="subcategorias">
          <option value="all">Todas las subcategorias</option>
          {subcategorias !== ""
            ? subcategorias.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))
            : null}
        </select>
      </div>
    </>
  );
};

export default TableNav;

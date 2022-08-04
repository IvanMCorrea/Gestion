import React, { useState, useEffect } from "react";

const TableNav = ({ prods }) => {
  const [categorias, setCategorias] = useState([]);
  const [subcategorias, setSubCategorias] = useState([]);
  useEffect(() => {
    const getCategorias = (productos) => {
      let category = [];
      category = productos.map((item) => {
        return (category = [item.category]);
      });
      const array = new Set(category.map((obj) => obj[0]));
      const cat = [...array];
      return cat;
    };
    if (prods !== "") {
      setCategorias(getCategorias(prods));
    }
  }, [prods]);
  useEffect(() => {
    const getSubCategorias = (productos) => {
      let category = [];
      category = productos.map((item) => {
        return (category = [item.subcategory]);
      });
      const array = new Set(category.map((obj) => obj[0]));
      const cat = [...array];
      return cat;
    };
    if (prods !== "") {
      setSubCategorias(getSubCategorias(prods));
    }
  }, [prods]);
  return (
    <>
      <div>
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
          <option value="all">Todos los productos</option>
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

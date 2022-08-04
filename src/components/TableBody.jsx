import React from "react";
import Item from "./Item";

const TableBody = ({ prods }) => {
  return (
    <div>
      {prods.map((item) => (
        <Item key={item.name} item={item} />
      ))}
    </div>
  );
};

export default TableBody;

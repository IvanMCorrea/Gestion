import React from "react";

const Item = ({ item }) => {
  return (
    <div>
      <input type="text" defaultValue={item.name} />
      <input type="number" defaultValue={item.stock} />
      <input type="text" defaultValue={item.desc} />
      <input type="text" defaultValue={item.upc} />
    </div>
  );
};

export default Item;

import { useState } from "react";
import Item from "../item/Item";

const items = [
  { id: "1", name: "iPhone X", price: "999.99", createdBy: "Apple" },
  { id: "2", name: "iPhone XS", price: "888.99", createdBy: "Apple" },
  { id: "3", name: "Galaxy Note", price: "888.00", createdBy: "Samsung" },
  { id: "4", name: "Redmi Note 8", price: "300.00", createdBy: "Xiaomi" },
];

const ItemListContainer = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const otherFunction = () => {
    console.log("otherFunction");
  };

  return (
    <div>
      <h1>Lista de productos</h1>
      <h3>Producto seleccionado</h3>
      <p>{selectedItem ? selectedItem.name : "Ninguno"}</p>
      <p>{selectedItem ? selectedItem.price : "Ninguno"}</p>
      <p>{selectedItem ? selectedItem.id : "Ninguno"}</p>
      <hr />
      {items.map(({ id, name, price }) => (
        <Item
          key={id}
          id={id}
          name={name}
          price={price}
          setSelectedItem={setSelectedItem}
          otherFunction={otherFunction}
        />
      ))}
    </div>
  );
};

export default ItemListContainer;

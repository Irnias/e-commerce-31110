import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCounter from "../item-counter/ItemCounter";

const Item = ({ id, name, description, image, stock = 20 }) => {
  const [sotckSelected, setSotckSelected] = useState(0);

  const onAdd = () => {
    //Agregaste el producto
    console.log('Agregaste el producto ', id);
  }
  return (
    <>
      <div>
        <h2>Nombre del producto: {name}</h2>
        <h2>Descripción del producto: {description}</h2>
        <img src={image} alt="image of product" />
        <ItemCounter 
          stock={stock} 
          setSotckSelected={setSotckSelected} 
          onAdd={onAdd} 
        />
        <Link to={`/item/${id}`}>Seleccionar producto</Link>
      </div>
      <hr />
    </>
  );
};

export default Item;

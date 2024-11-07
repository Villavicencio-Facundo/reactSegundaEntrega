import React, { useState, useContext } from "react";
import { Cart as CartContext } from "../context/CartProvider";
import ItemCount from './ItemCount';
import '../styles/style-item.css';
import { NavLink } from 'react-router-dom';

const ItemDetail = ({ product }) => {
  const { addCart } = useContext(CartContext);  // Obtenemos la función addCart desde el contexto
  const [itemCountVisibility, setItemCountVisibility] = useState(true);  // Controlamos si mostramos el componente ItemCount

  const handleCart = (quantity) => {
    console.log(quantity);  // Solo para verificar que la cantidad es la correcta
    setItemCountVisibility(false);  // Cuando se agrega el producto, ocultamos el contador
    addCart(product, quantity);  // Llamamos a addCart para agregar el producto al carrito con la cantidad seleccionada
  };

  return (
    <div className="item-style">
      <img src={product.pictureUrl} alt={product.title} />
      <h2>{product.title}</h2>
      <h3>{product.description}</h3>
      <span>{product.price}</span>
      <h4>Stock: {product.stock}</h4>
      
      {itemCountVisibility ? (
        <ItemCount addCart={handleCart} /> 
      ) : (
        <NavLink to="/cart">
          <button>Go to Cart</button>  {/* Cambié el botón para que sea un enlace */}
        </NavLink>
      )}
    </div>
  );
};

export default ItemDetail;

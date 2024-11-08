import React, { useState, useContext } from "react";
import { Cart as CartContext } from "../context/CartProvider";
import '../styles/CartItem.css'; 

const CartItem = ({ item }) => {
  const { removeCartItem, removeProductUnits } = useContext(CartContext);
  const [quantity, setQuantity] = useState(item.quantity); 

 
  const handleDelete = () => {
    removeCartItem(item.id);
  };

  const handleRemoveUnit = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      removeProductUnits(item.id, 1);  
    } else {
      handleDelete();  
    }
  };

  return (
    <div className="cart-item">
      <img src={item.pictureUrl} alt={item.title} className="cart-item-image" />
      <div className="cart-item-info">
        <h2>{item.title}</h2>
        <h3>{item.description}</h3>
        <span>Precio: ${item.price}</span>
        <h4>Cantidad: {quantity}</h4>
        <h4 className="total-price">Precio total: ${item.price * quantity}</h4> 
      </div>
      <div className="cart-item-buttons">
        <button onClick={handleDelete} className="remove-button">Eliminar todo</button>
        {quantity > 1 && (
          <button onClick={handleRemoveUnit} className="remove-unit-button">Borrar unidad</button>
        )}
      </div>
    </div>
  );
};

export default CartItem;

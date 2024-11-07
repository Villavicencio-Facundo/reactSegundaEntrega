import React, { useState, useContext } from "react";
import { Cart as CartContext } from "../context/CartProvider";
import '../styles/CartItem.css'; // Asegúrate de tener el import del CSS

const CartItem = ({ item }) => {
  const { removeCartItem, updateCartItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState(item.quantity); // Mantener la cantidad local

  // Lógica para borrar una unidad o eliminar todo si es solo una unidad
  const handleDelete = () => {
    if (quantity > 1) {
      // Si hay más de una unidad, reduce la cantidad
      setQuantity(quantity - 1);
      updateCartItem(item.id, quantity - 1); // Actualizar la cantidad en el carrito
    } else {
      // Si solo queda una unidad, eliminar el producto del carrito
      removeCartItem(item.id);
    }
  };

  const handleRemoveUnit = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      updateCartItem(item.id, quantity - 1); // Actualizar el carrito con la nueva cantidad
    }
  };

  return (
    <div className="cart-item">
      <img src={item.pictureUrl} alt={item.title} className="cart-item-image" />
      <div className="cart-item-info">
        <h2>{item.title}</h2>
        <h3>{item.description}</h3>
        <span>Precio: ${item.price}</span>
        <h4>Cantidad: {quantity}</h4> {/* Muestra la cantidad */}
        <h4 className="total-price">Precio total: ${item.price * quantity}</h4> {/* Muestra el precio total */}
      </div>
      <div className="cart-item-buttons">
        <button onClick={handleDelete} className="remove-button">Eliminar</button>
        {quantity > 1 && (
          <button onClick={handleRemoveUnit} className="remove-unit-button">Borrar unidad</button>
        )}
      </div>
    </div>
  );
};

export default CartItem;

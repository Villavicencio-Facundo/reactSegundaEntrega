import React, { useContext } from "react";  // Importa useContext
import { Cart as CartContext } from '../context/CartProvider';  // El contexto para acceder al carrito
import CartItem from "./CartItem";  // El componente que muestra cada producto en el carrito
import { NavLink } from "react-router-dom";  // Para redirigir a otras páginas si es necesario
import "../styles/Cart.css"

const Cart = () => {
  const { cart } = useContext(CartContext);  // Obtienes los productos del carrito desde el contexto

  return (
    <div className="cart">
      {/* Si el carrito está vacío */}
      {cart.length === 0 ? (
        <div>
          <h1>No hay productos en el carrito</h1>
          <NavLink to="/">Volver a la tienda</NavLink>  {/* Enlace a la página principal */}
        </div>
      ) : (
        // Si hay productos en el carrito, los mostramos
        <div>
          <h1>Carrito de Compras</h1>
          {cart.map((cartItem) => (
            <CartItem item={cartItem} key={cartItem.id} /> 
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;

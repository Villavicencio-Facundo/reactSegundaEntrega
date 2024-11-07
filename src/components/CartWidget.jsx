import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import cartIcon from "../assets/cartIcon.svg";
import { Cart as CartContext } from '../context/CartProvider';
import '../styles/CartWidget.css';

const CartWidget = () => {
  const { quantity } = useContext(CartContext);

  return (
    <div className="cart-widget-container">
      {/* Solo usamos NavLink aquí para que todo el widget sea clickeable */}
      <NavLink to="/cart">
        <div className="cart-container">
          <img className="cart" src={cartIcon} alt="Carrito" />
          {quantity > 0 && <span>{quantity}</span>}  {/* Muestra la cantidad de productos si es mayor que 0 */}
        </div>
      </NavLink>
    </div>
  );
};

export default CartWidget;

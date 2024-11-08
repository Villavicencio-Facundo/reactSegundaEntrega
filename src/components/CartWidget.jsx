import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import cartIcon from "../assets/cartIcon.svg";
import { Cart as CartContext } from '../context/CartProvider';
import '../styles/CartWidget.css';

const CartWidget = () => {
  const { quantity } = useContext(CartContext);

  return (
    <div className="cart-widget-container">
      <NavLink to="/cart" className="cart-container">
        <img className="cart-icon" src={cartIcon} alt="Carrito" />
        {quantity > 0 && <span className="cart-quantity">{quantity}</span>} 
      </NavLink>
    </div>
  );
};

export default CartWidget;

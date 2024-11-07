import React from 'react';
import { NavLink } from 'react-router-dom';
import CartWidget from './cartWidget';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <ul>
        {/* Enlace a la página de inicio */}
        <li>
          <NavLink 
            className={({ isActive }) => (isActive ? 'isActive' : 'notActive')} 
            to={"/"}>Home
          </NavLink>
        </li>
        
        {/* Enlace a la categoría Electric */}
        <li>
          <NavLink 
            className={({ isActive }) => (isActive ? 'isActive' : 'notActive')} 
            to={"/category/electric"}>Electric
          </NavLink>
        </li>
        
        {/* Enlace a la categoría Acoustic */}
        <li>
          <NavLink 
            className={({ isActive }) => (isActive ? 'isActive' : 'notActive')} 
            to={"/category/acoustic"}>Acoustic
          </NavLink>
        </li>

        {/* Enlace al carrito */}
        <li>
          <NavLink to="/cart" className="cart-widget-container">
            <CartWidget />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

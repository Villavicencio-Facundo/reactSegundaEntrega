import React from 'react';
import { NavLink } from 'react-router-dom';
import CartWidget from './cartWidget';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink 
            className={({ isActive }) => (isActive ? 'isActive' : 'notActive')} 
            to={"/"}>Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            className={({ isActive }) => (isActive ? 'isActive' : 'notActive')} 
            to={"/category/electric"}>Electric
          </NavLink>
        </li>
        <li>
          <NavLink 
            className={({ isActive }) => (isActive ? 'isActive' : 'notActive')} 
            to={"/category/acoustic"}>Acoustic
          </NavLink>
        </li>
        <li>
            <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

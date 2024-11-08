import React, { useState, useContext } from "react";
import { Cart as CartContext } from "../context/CartProvider";
import ItemCount from './ItemCount';
import { NavLink, useNavigate } from 'react-router-dom';  
import Swal from "sweetalert2";
import '../styles/style-item.css';

const ItemDetail = ({ product }) => {
  const { addCart } = useContext(CartContext); 
  const [itemCountVisibility, setItemCountVisibility] = useState(true);
  const [quantity, setQuantity] = useState(1);  
  const navigate = useNavigate();  

  const handleCart = (quantity) => {
    if (quantity > product.stock) {
      Swal.fire({
        icon: 'error',
        title: '¡Error!',
        text: 'No puedes agregar más unidades de las que hay en stock',
      });
      return;
    }
    setItemCountVisibility(false);  
    addCart(product, quantity); 
  };

  const handleIncrease = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    } else {
      Swal.fire({
        icon: 'error',
        title: '¡Error!',
        text: 'No puedes agregar más unidades de las que hay en stock',
      });
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddMore = () => {
    navigate("/"); 
  };

  return (
    <div className="item-style">
      <img src={product.pictureUrl} alt={product.title} />
      <h2>{product.title}</h2>
      <h3>{product.description}</h3>
      <span>{product.price}</span>
      <h4>Stock: {product.stock}</h4>
      
      {itemCountVisibility ? (
        <div>
          <ItemCount 
            addCart={handleCart}
            quantity={quantity}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
          />
        </div>
      ) : (
        <div>
          <NavLink to="/cart">
            <button>Ir a carrito</button>
          </NavLink>
          <button onClick={handleAddMore}>Agregar más productos</button>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;

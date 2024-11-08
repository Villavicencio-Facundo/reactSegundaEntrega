import React, { useContext, useState } from "react";  
import { Cart as CartContext } from '../context/CartProvider';  
import CartItem from "./CartItem"; 
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Cart.css";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";
import Swal from "sweetalert2"; 

const Cart = () => {
  const { cart } = useContext(CartContext); 
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const navigate = useNavigate();

  const handlePurchase = async () => {
    const { value: formData } = await Swal.fire({
      title: 'Ingresa tus datos',
      html: `
        <input id="name" class="swal2-input" placeholder="Nombre" />
        <input id="lastName" class="swal2-input" placeholder="Apellido" />
        <input id="email" class="swal2-input" placeholder="Correo electrónico" />
        <input id="address" class="swal2-input" placeholder="Dirección de Envío" />
      `,
      focusConfirm: false,
      preConfirm: () => {
        return {
          name: document.getElementById('name').value,
          lastName: document.getElementById('lastName').value,
          email: document.getElementById('email').value,
          address: document.getElementById('address').value,
        };
      }
    });

    if (formData) {
      const { name, lastName, email, address } = formData;

      if (!name || !lastName || !email || !address) {
        Swal.fire({
          icon: 'error',
          title: '¡Faltan campos!',
          text: 'Por favor, completa todos los campos del formulario.',
        });
        return; 
      }
      const order = {
        buyer: formData,
        products: cart,
        total: totalPrice,
        timestamp: serverTimestamp(),
      };

      try {
        await addDoc(collection(db, "orders"), order);
        Swal.fire({
          icon: 'success',
          title: '¡Compra realizada con éxito!',
          text: 'Tu compra fue procesada. Gracias por tu compra.',
        });
        navigate("/");  
      } catch (error) {
        console.error("Error al guardar la orden:", error);
        Swal.fire({
          icon: 'error',
          title: '¡Error al procesar la compra!',
          text: 'Hubo un problema con tu compra. Inténtalo más tarde.',
        });
      }
    }
  };

  return (
    <div className="cart">
      {cart.length === 0 ? (
        <div className="divCart">
          <h1>No hay productos en el carrito</h1>
          <NavLink className={"back"} to="/">Volver a la tienda</NavLink> 
        </div>
      ) : (
        <div>
          <h1>Carrito de Compras</h1>
          {cart.map((cartItem) => (
            <CartItem item={cartItem} key={cartItem.id} /> 
          ))}
          <button onClick={handlePurchase}>Finalizar compra</button>
        </div>
      )}
    </div>
  );
};

export default Cart;

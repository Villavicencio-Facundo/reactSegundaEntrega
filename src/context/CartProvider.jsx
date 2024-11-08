import React, { createContext, useState } from 'react';

export const Cart = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addCart = (product, ProductQuantity) => {
    const productInCart = isInCart(product.id);
    let cartUpdated = [...cart];

    if (productInCart) {
      cartUpdated = cart.map(cartProduct => {
        if (cartProduct.id === product.id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + ProductQuantity
          };
        }
        return cartProduct;
      });
    } else {
      cartUpdated.push({ ...product, quantity: ProductQuantity });
    }

    setCart(cartUpdated);
  };

  const isInCart = (productId) => {
    return cart.some(cartProduct => cartProduct.id === productId);
  };

  const removeProductUnits = (productId, quantityToRemove) => {
    const cartUpdated = cart.map(cartProduct => {
      if (cartProduct.id === productId) {
        if (cartProduct.quantity > quantityToRemove) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity - quantityToRemove
          };
        }
        return null; 
      }
      return cartProduct;
    }).filter(item => item !== null); 

    setCart(cartUpdated);
  };

  const removeCartItem = (productId) => {
    const updatedCart = cart.filter(cartProduct => cartProduct.id !== productId);
    setCart(updatedCart);
  };

  return (
    <Cart.Provider value={{ cart, addCart, removeCartItem, removeProductUnits }}>
      {children}
    </Cart.Provider>
  );
};

export default CartProvider;

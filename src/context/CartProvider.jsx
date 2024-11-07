import React, { createContext, useState } from 'react';

export const Cart = createContext(); 

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);

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
    setQuantity(cartUpdated.length);
  };

  const isInCart = (productId) => {
    return cart.some(cartProduct => cartProduct.id === productId);
  };

  // Función para eliminar unidades del carrito
  const removeProductUnits = (productId, quantityToRemove) => {
    const cartUpdated = cart.map(cartProduct => {
      if (cartProduct.id === productId) {
        if (cartProduct.quantity > quantityToRemove) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity - quantityToRemove
          };
        }
        return null;  // Si la cantidad es 0 o menor, lo eliminamos
      }
      return cartProduct;
    }).filter(item => item !== null);  // Filtramos los productos eliminados

    setCart(cartUpdated);
    setQuantity(cartUpdated.reduce((acc, item) => acc + item.quantity, 0));  // Actualizamos la cantidad total
  };

  const removeCartItem = (productId) => {
    const updatedCart = cart.filter(cartProduct => cartProduct.id !== productId);
    setCart(updatedCart);
    setQuantity(updatedCart.reduce((acc, item) => acc + item.quantity, 0));
  };

  return (
    <Cart.Provider value={{ cart, quantity, addCart, removeCartItem, removeProductUnits }}>
      {children}
    </Cart.Provider>
  );
};

export default CartProvider;

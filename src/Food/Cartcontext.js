import React, { useState, createContext, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let total = 0;
    let items = 0;

    for (const item of cartItems) {
      total += parseFloat(item.price)* item.quantity;;
      items += item.quantity;
    }

    setTotalPrice(total.toFixed(2));
    setTotalItems(items);
  }, [cartItems]);

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.name === item.name);

    if (existingItem) {
      const updatedItems = cartItems.map((cartItem) =>
        cartItem.name === item.name ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCartItems(updatedItems);
    } else {
      const newItem = { ...item, quantity: 1 };
      setCartItems([...cartItems, newItem]);
    }
  };

  const cartContextValue = {
    cartItems,
    setCartItems,
    totalPrice,
    totalItems,
    addToCart,
  };

  return <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>;
};

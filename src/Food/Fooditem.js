import React, { useContext } from 'react';
import './Fooditem.css';
import { CartContext } from './Cartcontext';

function FoodItem({ name, price }) {
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleAddToCart = () => {
    const existingItem = cartItems.find(item => item.name === name);
    if (existingItem) {
      const updatedItems = cartItems.map(item => {
        if (item.name === name) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCartItems(updatedItems);
    } else {
      const newItem = { name, price, quantity: 1 };
      setCartItems([...cartItems, newItem]);
    }
  };

  return (
    <div className="food-item">
      <span className="food-name">{name}</span>
      <span className="food-price">{price}</span>
      <button className="add-button" onClick={handleAddToCart}>
        Add
      </button>
      <div className="quantity-box">
        Quantity: {cartItems.find(item => item.name === name)?.quantity || 0}
      </div>
    </div>
  );
}

export default FoodItem;

import React, { useContext } from 'react';
import './Foodcard.css';
import FoodItem from './Fooditem';
import { CartContext } from './Cartcontext';

function FoodCard() {
  const { addToCart } = useContext(CartContext);

  const foodItems = [
    { name: 'Pizza', price: '10.99' },
    { name: 'Burger', price: '8.99' },
    { name: 'Sushi', price: '12.99' },
    { name: 'Pasta', price: '9.99' },
  ];

  return (
    <div className="food-card">
      <h3 className="food-card-title">Food Items</h3>
      <ul className="food-card-items">
        {foodItems.map((item, index) => (
          <li key={index}>
            <FoodItem name={item.name} price={item.price} onAddToCart={() => addToCart(item)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FoodCard;

import React from 'react';
import './Foodcard.css';
import FoodItem from './Fooditem';

function FoodCard() {
  const foodItems = [
    { name: 'Pizza', price: 'Rs 10.99' },
    { name: 'Burger', price: 'Rs 8.99' },
    { name: 'Sushi', price: 'Rs 12.99' },
    { name: 'Pasta', price: 'Rs 9.99' },
  ];

  return (
    <div className="food-card">
      <h3 className="food-card-title">Food Items</h3>
      <ul className="food-card-items">
        {foodItems.map((item, index) => (
          <li key={index}>
            <FoodItem name={item.name} price={item.price} />
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FoodCard;

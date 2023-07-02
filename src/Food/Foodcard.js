import React from 'react';
import './Foodcard.css';

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
          {item.name} - <span className="price">{item.price}</span>
        </li>
        ))}
      </ul>
    </div>
  );
}

export default FoodCard;


import React from 'react';

function FoodList() {
  const foodItems = ['Pizza', 'Burger', 'Sushi', 'Pasta'];

  return (
    <div className="food-list">
      <h3>Food Items</h3>
      <ul>
        {foodItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default FoodList;

import React, { useState } from 'react';
import './Button.css';
import FoodCard from './Foodcard';

function Button() {
  const [showFoodCard, setShowFoodCard] = useState(false);
  const foodItems = ['Pizza', 'Burger', 'Sushi', 'Pasta'];

  const handleClick = () => {
    setShowFoodCard(!showFoodCard);
  };

  return (
    <div>
      <button className="button" onClick={handleClick}>
        Show Food Items
      </button>
      {showFoodCard && <FoodCard foodItems={foodItems} />}
    </div>
  );
}

export default Button;
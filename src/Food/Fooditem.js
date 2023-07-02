import React, { useState } from 'react';
import './Fooditem.css'

function FoodItem({ name, price }) {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="food-item">
      <span className="food-name">{name}</span>
      <span className="food-price">{price}</span>
      <button className="add-button" onClick={incrementCount}>
        Add
      </button>
      <div className="count-box">
        <button onClick={decrementCount}>-</button>
        {count}
        <button onClick={incrementCount}>+</button>
      </div>
    </div>
  );
}

export default FoodItem;

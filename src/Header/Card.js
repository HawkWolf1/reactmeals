import React, { useState } from 'react';
import './Card.css';
import image from '../Images/Siteheader.jpg'

const Card = () => {

const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="card">
    <h1 className="heading">React-Meals</h1>
    <button className="cart-button" onClick={incrementCounter}>
        Cart
      </button>
      <span className="counter">{counter}</span>
    <img className="image" src={image} alt="Head" />
    </div>
  );
};

export default Card;
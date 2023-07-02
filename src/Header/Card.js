import React from 'react';
import './Card.css';
import image from '../Images/Siteheader.jpg';


const Card = () => {
  

  return (
    <div className="card">
      <h1 className="heading">React-Meals</h1>
      <img className="image" src={image} alt="Head" />
      
    </div>
  );
};

export default Card;

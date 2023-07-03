import React, { useState } from 'react';
import Card from './Header/Card.js';
import Overlaycard from './Header/Overlaycard.js';
import Button from './Food/Button.js';
import FoodCard from './Food/Foodcard';
import CartButton from './Food/Cartbutton.js';

function App() {
  const [showFoodCard, setShowFoodCard] = useState(false);

  const handleButtonClick = () => {
    setShowFoodCard(!showFoodCard);
  };

  return (
    <div>
      <Card />
      <Overlaycard />
      <CartButton/>

      <Button onClick={handleButtonClick} />
      {showFoodCard && <FoodCard />}
    </div>
  );
}

export default App;
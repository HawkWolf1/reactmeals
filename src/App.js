import React, { useState } from 'react';

import Card from './Header/Card.js'
import Overlaycard from './Header/Overlaycard.js';

import Button from './Food/Button.js';
import FoodList from './Food/FoodList';


function App() {
  const [showFoodList, setShowFoodList] = useState(false);

  const handleButtonClick = () => {
    setShowFoodList(!showFoodList);
  };

  return (
    <div>
      <Card/>
      <Overlaycard />

      <Button onClick={handleButtonClick} />
      {showFoodList && <FoodList />}

    </div>
    
  );
}

export default App;

import React from 'react';
import Card from './Header/Card.js';
import Overlaycard from './Header/Overlaycard.js';
import Button from './Food/Button.js';
import FoodCard from './Food/Foodcard';
import CartButton from './Food/Cartbutton.js';
import { CartProvider } from './Food/Cartcontext';

function App() {
  return (
    <CartProvider>
      <div>
        <Card />
        <Overlaycard />
        <CartButton />

        <Button />
        <FoodCard />
      </div>
    </CartProvider>
  );
}

export default App;

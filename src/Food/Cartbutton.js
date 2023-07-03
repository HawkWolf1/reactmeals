import React, { useState } from 'react';
import './Cartbutton.css';

function CartButton() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleButtonClick = () => {
    setIsFormOpen(prevState => !prevState);
  };

  const handleClose = () => {
    setIsFormOpen(false);
  };

  const handlePlaceOrder = () => {
    alert('Your order has been placed!');
  };

  return (
    <div>
      <button className="cart-button" onClick={handleButtonClick}>
        Cart
      </button>
      {isFormOpen && (
        <div className="cart-overlay">
          <div className="cart-card">
            <button className="close-button" onClick={handleClose}>
              Close
            </button>
            <button className="place-order-button" onClick={handlePlaceOrder}>
              Place Order
            </button>
            <form>
              The content of your form
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartButton;





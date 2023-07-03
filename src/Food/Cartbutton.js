import React, { useContext, useState } from 'react';
import './Cartbutton.css';
import { CartContext } from './Cartcontext';

function CartButton() {
  const { cartItems } = useContext(CartContext);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleButtonClick = () => {
    setIsFormOpen((prevState) => !prevState);
  };

  const handleClose = () => {
    setIsFormOpen(false);
  };

  const handlePlaceOrder = () => {
    alert('Your order has been placed!');
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      const itemPrice = parseFloat(item.price.substring(3));
      totalPrice += itemPrice * item.count;
    });
    return totalPrice.toFixed(2);
  };

  return (
    <div>
      <button className="cart-button" onClick={handleButtonClick}>
        Cart ({cartItems.length})
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
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  {item.name} - {item.price} - Quantity: {item.count}
                </li>
              ))}
            </ul>
            <p>Total Price: Rs {calculateTotalPrice()}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartButton;

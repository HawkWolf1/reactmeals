import React, { useContext, useState } from 'react';
import './Cartbutton.css';
import { CartContext } from './Cartcontext';

function CartButton() {
  const { cartItems, setCartItems, totalPrice } = useContext(CartContext);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleButtonClick = () => {
    setIsFormOpen((prevState) => !prevState);
  };

  const handleClose = () => {
    setIsFormOpen(false);
  };

  const handlePlaceOrder = () => {
    alert('Your order has been placed!');
    setCartItems([]); // Reset cart items to an empty array
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
                <span className="food-me">{item.name}</span>
                <span className="food-ce">Rs {item.price}</span>
                <span className="food-ty">Quantity: {item.quantity}</span>
              </li>
              ))}
            </ul>
            <div className="total-price">Total Price: Rs {totalPrice}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartButton;

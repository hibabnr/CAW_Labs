import React from 'react';
import './Order.css';

const Order = ({ cart, setShowOrder }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="order-modal">
      <div className="order-summary">
        <h2>Order Summary</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} (x{item.quantity}) - ${item.price * item.quantity}
            </li>
          ))}
        </ul>
        <h3>Total: ${total}</h3>
        <p>Your order has been placed successfully!</p>
        <button onClick={() => setShowOrder(false)}>Close</button>
      </div>
    </div>
  );
};

export default Order;

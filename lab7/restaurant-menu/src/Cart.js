import React from 'react';
import './Cart.css';

const Cart = ({ cart, setCart, handleConfirmOrder }) => {
  const handleRemoveItem = (itemToRemove) => {
    setCart(cart.filter(item => item.id !== itemToRemove.id));
  };

  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <span>{item.name}</span>
                <span>${item.price}</span>
                <span>Quantity: {item.quantity}</span>
              </div>
              <button onClick={() => handleRemoveItem(item)}>Delete</button>
            </li>
          ))}
        </ul>
      )}

      {cart.length > 0 && (
        <div className="cart-actions">
          <p><strong>Total: ${calculateTotal()}</strong></p>
          <button className="clear-cart" onClick={() => setCart([])}>
            Clear Cart
          </button>
          <button className="confirm-order" onClick={handleConfirmOrder}>
            Confirm Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;

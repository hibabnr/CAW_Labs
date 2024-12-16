import React, { useState } from 'react';
import MenuDisplay from './MenuDisplay';
import Cart from './Cart';
import Order from './Order';
import './App.css';
import { FaShoppingCart } from 'react-icons/fa'; 

const App = () => {
  const [orderData, setOrderData] = useState(null); 
  const [isCartVisible, setIsCartVisible] = useState(false); 
  const [cart, setCart] = useState([]); 
  const [showOrder, setShowOrder] = useState(false); 

  const handleConfirmOrder = () => {
    setOrderData(cart);
    setShowOrder(true); 
    setCart([]); 
  };

  const handleCloseOrder = () => {
    setShowOrder(false);
  };

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  return (
    <div className="App">
      <MenuDisplay addToCart={addToCart} />

      <div className="cart-icon" onClick={() => setIsCartVisible(!isCartVisible)}>
        <FaShoppingCart size={30} />
        <span className="cart-count">{cart.length}</span>
      </div>

      {isCartVisible && <Cart cart={cart} setCart={setCart} handleConfirmOrder={handleConfirmOrder} />}

      {showOrder && orderData && <Order cart={orderData} setShowOrder={setShowOrder} />}
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import MenuItem from './MenuItem';
import './MenuDisplay.css';

const MenuDisplay = ({ addToCart }) => {
  const [activeCategory, setActiveCategory] = useState('Pizza');

  const categories = ['Pizza', 'Sandwich', 'Drinks'];
  const menuItems = [
    { id: 1, category: 'Pizza', name: 'Margherita', description: 'Classic Pizza', price: 12, image: 'Pizza.png' },
    { id: 2, category: 'Pizza', name: 'Pepperoni', description: 'Spicy pizza', price: 15, image: 'Pizza.png' },
    { id: 3, category: 'Sandwich', name: 'Shawarma', description: 'double sauce shawarma', price: 8, image: 'shawarma.jpg' },
    { id: 4, category: 'Drinks', name: 'Water', description: 'bottle of water', price: 2, image: 'water.jpg' },
    { id: 5, category: 'Pizza', name: 'Margherita', description: 'Classic Pizza', price: 12, image: 'Pizza.png' },
    { id: 6, category: 'Pizza', name: 'Pepperoni', description: 'Spicy pizza', price: 15, image: 'Pizza.png' },
    { id: 7, category: 'Sandwich', name: 'Shawarma', description: 'double sauce shawarma', price: 8, image: 'shawarma.jpg' },
    { id: 8, category: 'Drinks', name: 'Water', description: 'bottle of water', price: 2, image: 'water.jpg' },
    { id: 9, category: 'Pizza', name: 'Margherita', description: 'Classic Pizza', price: 12, image: 'Pizza.png' },
    { id: 10, category: 'Pizza', name: 'Pepperoni', description: 'Spicy pizza', price: 15, image: 'Pizza.png' },
    { id: 11, category: 'Sandwich', name: 'Shawarma', description: 'double sauce shawarma', price: 8, image: 'shawarma.jpg' },
    { id: 12, category: 'Drinks', name: 'Water', description: 'bottle of water', price: 2, image: 'water.jpg' },
    { id: 13, category: 'Pizza', name: 'Margherita', description: 'Classic Pizza', price: 12, image: 'Pizza.png' },
    { id: 14, category: 'Pizza', name: 'Pepperoni', description: 'Spicy pizza', price: 15, image: 'Pizza.png' },
    { id: 15, category: 'Sandwich', name: 'Shawarma', description: 'double sauce shawarma', price: 8, image: 'shawarma.jpg' },
    { id: 16, category: 'Drinks', name: 'Water', description: 'bottle of water', price: 2, image: 'water.jpg' },
    { id: 17, category: 'Pizza', name: 'Margherita', description: 'Classic Pizza', price: 12, image: 'Pizza.png' },
    { id: 18, category: 'Pizza', name: 'Pepperoni', description: 'Spicy pizza', price: 15, image: 'Pizza.png' },
    { id: 19, category: 'Sandwich', name: 'Shawarma', description: 'double sauce shawarma', price: 8, image: 'shawarma.jpg' },
    { id: 20, category: 'Drinks', name: 'Water', description: 'bottle of water', price: 2, image: 'water.jpg' },
    { id: 21, category: 'Pizza', name: 'Margherita', description: 'Classic Pizza', price: 12, image: 'Pizza.png' },
    { id: 22, category: 'Pizza', name: 'Pepperoni', description: 'Spicy pizza', price: 15, image: 'Pizza.png' },
    { id: 23, category: 'Sandwich', name: 'Shawarma', description: 'double sauce shawarma', price: 8, image: 'shawarma.jpg' },
    { id: 24, category: 'Drinks', name: 'Water', description: 'bottle of water', price: 2, image: 'water.jpg' },
  ];

  return (
    <div className="menu-display">
      <div className="categories">
        {categories.map((category) => (
          <button
            key={category}
            className={category === activeCategory ? 'active' : ''}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="menu-items">
        {menuItems
          .filter((item) => item.category === activeCategory)
          .map((item) => (
            <MenuItem key={item.id} item={item} addToCart={addToCart} />
          ))}
      </div>
    </div>
  );
};

export default MenuDisplay;

import React, { useState } from 'react';

const DisplayTab = ({ initialTab }) => {
  const [tab, setTab] = useState(initialTab); 

  const handleRemove = (index) => {
    setTab((prevTab) => prevTab.filter((_, i) => i !== index)); 
  };

  return (
    <div>
      <ul>
        {tab.map((item, index) => (
          <li key={index} onClick={() => handleRemove(index)}>
            Element {index + 1} is: {item}
          </li>
        ))}
      </ul>
      {tab.length === 0 && <p>No more elements in the list!</p>} 
    </div>
  );
};

export default DisplayTab;

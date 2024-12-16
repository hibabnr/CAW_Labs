import React, { useState } from 'react';

const AddDivForm = () => {
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [divs, setDivs] = useState([]); 

  const handleSubmit = (event) => {
    event.preventDefault(); 
    if (height && width && backgroundColor) {
      
      const newDiv = {
        height,
        width,
        backgroundColor
      };

      setDivs([...divs, newDiv]);

      setHeight('');
      setWidth('');
      setBackgroundColor('');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="height">Height (px): </label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="width">Width (px): </label>
          <input
            type="number"
            id="width"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="backgroundColor">Background Color: </label>
          <input
            type="text"
            id="backgroundColor"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
            required
          />
        </div>
        <button type="submit">submit</button>
      </form>

      <h2>Added Divs</h2>
      <div>
        {divs.length > 0 ? (
          divs.map((div, index) => (
            <div
              key={index}
              style={{
                height: `${div.height}px`,
                width: `${div.width}px`,
                backgroundColor: div.backgroundColor,
                margin: '10px 0',
                border: '1px solid #000'
              }}
            >
            </div>
          ))
        ) : (
          <p>No divs added yet.</p>
        )}
      </div>
    </div>
  );
};

export default AddDivForm;

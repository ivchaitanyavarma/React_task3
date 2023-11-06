import React, { useState } from 'react';
import './color.css';

const ColorPicker = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [isColorListVisible, setIsColorListVisible] = useState(false);

  const handleButtonClick = () => {
    setIsColorListVisible(!isColorListVisible);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setIsColorListVisible(false);
  };

  return (
    <div className="color-picker">
      <h2>Color Picker</h2>
      {isColorListVisible && (
        <div className="color-list">
          {colors.map((color,index)=> (
            <div key={index} className="color-square" style={{backgroundColor: color}} onClick={() => handleColorClick(color)}></div>
          ))}
          </div>
      )}
      {selectedColor && (
        <p>You seleted: {selectedColor}</p>
      )}
      <button onClick={handleButtonClick}>Pick a color</button>
    </div>
  );
}

export default ColorPicker;

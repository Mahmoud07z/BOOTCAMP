// src/Components/Events.js
import React, { useState } from 'react';

const Events = () => {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const clickMe = () => {
    alert('I was clicked');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      alert(`You typed: ${event.target.value}`);
    }
  };

  const toggleButton = () => {
    setIsToggleOn(prevState => !prevState);
  };

  return (
    <div>
      {/* Part I: Click button */}
      <button onClick={clickMe}>Click Me</button>
      <br /><br />

      {/* Part II: Input field for Enter key */}
      <input
        type="text"
        placeholder="Type and press Enter"
        onKeyDown={handleKeyDown}
      />
      <br /><br />

      {/* Part III: Toggle ON/OFF */}
      <button onClick={toggleButton}>
        {isToggleOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
};

export default Events;

// src/Components/Color.js
import React, { useState, useEffect } from 'react';

const Color = () => {
  const [favoriteColor, setFavoriteColor] = useState("red");

  useEffect(() => {
    alert("useEffect reached");

    return () => {
      // Optional cleanup function if needed
    };
  });

  const changeColor = () => {
    setFavoriteColor("blue");
  };

  return (
    <div>
      <h1>{favoriteColor}</h1>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default Color;

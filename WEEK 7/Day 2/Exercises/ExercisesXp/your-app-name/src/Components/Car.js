// src/Components/Car.js
import React, { useState } from 'react';
import Garage from './Garage';

function Car(props) {
  const [color] = useState('red'); // useState Hook

  return (
    <div>
      <h1>This car is a {color} {props.car.model}</h1>
      <Garage size="small" />
    </div>
  );
}

export default Car;

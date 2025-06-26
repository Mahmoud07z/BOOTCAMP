import React from 'react';
import { useSelector } from 'react-redux';
import './spinner.css';

const AgeDisplay = () => {
  const { age, loading } = useSelector((state) => state.age);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Current Age: {age}</h2>
      {loading && <div className="spinner" />}
    </div>
  );
};

export default AgeDisplay;

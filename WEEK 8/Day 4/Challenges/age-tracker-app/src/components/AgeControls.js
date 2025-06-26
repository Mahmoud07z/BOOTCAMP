import React from 'react';
import { useDispatch } from 'react-redux';
import { ageUpAsync, ageDownAsync } from '../features/age/ageSlice';

const AgeControls = () => {
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
      <button onClick={() => dispatch(ageUpAsync())}>Age Up</button>
      <button onClick={() => dispatch(ageDownAsync())} style={{ marginLeft: '10px' }}>
        Age Down
      </button>
    </div>
  );
};

export default AgeControls;

import React from 'react';
import AgeDisplay from './components/AgeDisplay';
import AgeControls from './components/AgeControls';

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Age Tracker</h1>
      <AgeDisplay />
      <AgeControls />
    </div>
  );
}

export default App;

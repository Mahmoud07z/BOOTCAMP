// src/App.js
import { useState } from 'react';

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  const handleVote = (index) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index].votes += 1;
    setLanguages(updatedLanguages);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Vote for your favorite language</h1>
      {languages.map((lang, index) => (
        <div key={lang.name} style={{ marginBottom: '10px' }}>
          <span style={{ marginRight: '10px' }}>
            {lang.name}: {lang.votes} votes
          </span>
          <button onClick={() => handleVote(index)}>Vote</button>
        </div>
      ))}
    </div>
  );
}

export default App;

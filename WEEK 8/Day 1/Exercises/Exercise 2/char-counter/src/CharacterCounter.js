// src/CharacterCounter.js
import { useRef, useState } from "react";

export default function CharacterCounter() {
  const inputRef = useRef(); // points to the input element
  const [charCount, setCharCount] = useState(0);

  const handleInput = () => {
    const length = inputRef.current.value.length;
    setCharCount(length);
  };

  return (
    <div>
      <h2>Character Counter</h2>
      <input
        type="text"
        ref={inputRef}
        onInput={handleInput}
        placeholder="Type something..."
      />
      <p>Characters: {charCount}</p>
    </div>
  );
}

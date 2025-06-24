import { useEffect, useState } from "react";
import { quotes } from "./QuotesDatabase";
import "./App.css";

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  return "#" + Array.from({ length: 6 }, () => letters[Math.floor(Math.random() * 16)]).join("");
}

function App() {
  const [quotePool, setQuotePool] = useState([...quotes]);
  const [current, setCurrent] = useState({});
  const [colors, setColors] = useState({
    background: "#ffffff",
    text: "#000000",
    button: "#007BFF"
  });

  const generateQuote = () => {
    if (quotePool.length === 0) {
      setQuotePool([...quotes]);
    }

    const randomIndex = Math.floor(Math.random() * quotePool.length);
    const selectedQuote = quotePool[randomIndex];

    setCurrent(selectedQuote);
    setQuotePool(quotePool.filter((_, i) => i !== randomIndex));

    setColors({
      background: getRandomColor(),
      text: getRandomColor(),
      button: getRandomColor()
    });
  };

  useEffect(() => {
    // Inline the logic to avoid dependency warning
    if (quotePool.length === 0) {
      setQuotePool([...quotes]);
    }

    const randomIndex = Math.floor(Math.random() * quotePool.length);
    const selectedQuote = quotePool[randomIndex];

    setCurrent(selectedQuote);
    setQuotePool(quotePool.filter((_, i) => i !== randomIndex));

    setColors({
      background: getRandomColor(),
      text: getRandomColor(),
      button: getRandomColor()
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div
      className="container"
      style={{ backgroundColor: colors.background, color: colors.text }}
    >
      <div className="quote-box">
        <h1>"{current.quote}"</h1>
        <p>— {current.author}</p>
        <button
          onClick={generateQuote}
          style={{ backgroundColor: colors.button }}
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;

// src/Exercise3.js
import React, { Component } from 'react';
import './Exercise.css'; // External CSS for the paragraph
import './Exercise.css';

class Exercise extends Component {
  render() {
    const style_header = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };

    return (
      <div>
        <h1 style={style_header}>This is a styled heading</h1>

        <p className="para">This is a paragraph.</p>

        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          This is a link to React
        </a>

        <form>
          <input type="text" placeholder="Type here..." />
          <button type="submit">Submit</button>
        </form>

        <img
          src="https://via.placeholder.com/150"
          alt="placeholder"
        />

        <ul>
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;

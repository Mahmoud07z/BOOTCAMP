import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectBooks,
  selectHorrorBooks,
  selectFantasyBooks,
  selectScienceFictionBooks,
} from '../features/books/selectors';

const genreMap = {
  All: selectBooks,
  Horror: selectHorrorBooks,
  Fantasy: selectFantasyBooks,
  'Science Fiction': selectScienceFictionBooks,
};

const BookList = () => {
  const [genre, setGenre] = useState('All');
  const books = useSelector(genreMap[genre]);

  return (
    <div>
      <h1>📚 Book Inventory</h1>
      <label>Filter by Genre: </label>
      <select value={genre} onChange={e => setGenre(e.target.value)}>
        <option>All</option>
        <option>Horror</option>
        <option>Fantasy</option>
        <option>Science Fiction</option>
      </select>

      <ul>
        {books.map(book => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author} [{book.genre}]
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;

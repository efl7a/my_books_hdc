import React from 'react';

import Book from './Book';
import './Bookshelf.css';

export default ({ books }) => {
  const renderBooks = books => books.map((book, i) => <li key={i}><Book book={book}/></li>);

  return(
    <ul className="Bookshelf">
      {renderBooks(books)}
    </ul>
  );
}

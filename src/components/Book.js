import React from 'react';

import './Book.css';

export default ({ book }) => {
  const {title, author, year, genre, imageUrl} = book;
  return (
    <div className="BookRow">
      <img
        className="BookImage"
        alt={title}
        src={imageUrl}
      >

      </img>
      <div className="BookDetails">
        <h3>{title}</h3>
        <h4>Author: {author}</h4>
        <h4>Year Published: {year}</h4>
        <h4>Genre: {genre}</h4>
      </div>
    </div>
  );
}

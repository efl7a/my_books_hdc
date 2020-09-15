import React from 'react';

import Bookshelf from './Bookshelf';
import './App.css';

const App = () => {

  return (
    <div className="App">
      <h1 className="title">Your Bookshelves</h1>
      <Bookshelf title="Your Books" />
      <Bookshelf title="Books to Read" />
    </div>
  );
}

export default App;

import React from 'react';

import Bookshelf from './Bookshelf';
import { BOOKS } from '../constants/books';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1 className="title">Your Bookshelf</h1>
      <Bookshelf books={BOOKS} />
    </div>
  );
}

export default App;

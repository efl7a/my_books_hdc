import React from 'react';

import Bookshelf from './Bookshelf';
import './App.css';

const App = () => {
  // constructor() {
  //   super();
  //   this.state = {
  //     readBooks: [],
  //     booksToRead: []
  //   }
  // }
  //
  // handleAddBook = (type, book) => {
  //   let id = this.state[type].length + 1;
  //   let newBook = {
  //     id: id,
  //     title: book.title,
  //     author: book.author,
  //     genre: book.genre
  //   }
  //   this.state[type].push(newBook)
  //   this.setState({ [type]: this.state[type]})
  // }
  //
  // handleEditBook = (type, book) => {
  //   this.setState(prevState => ({
  //     [type]: prevState[type].map(
  //       el => el.id === book.id ? book : el
  //     )
  //   }))
  // }
  //
  // handleDeleteBook = (type, id) => {
  //   console.log("in app delete book function")
  //   this.setState(prevState => ({
  //     [type]: prevState[type].filter(el => el.id !== id)
  //   }))
  // }

    return (
      <div className="App">
        <h1 className="title">Your Bookshelves</h1>
        <Bookshelf title="Your Books" />
        <Bookshelf title="Books to Read" />
      </div>
    );
}

export default App;

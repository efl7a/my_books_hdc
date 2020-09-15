import React, { Component } from 'react';

import Book from './Book';
import BookForm from './BookForm';
import './Bookshelf.css';

 class Bookshelf extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      addBook: false
    }
  }

  renderBooks = books => books.map((book) => <li key={book.id}><Book book={book} handleEdit={this.handleEditBook} handleDelete={this.handleDeleteBook}/></li>);

  handleAddClick = () => this.setState((state) => ({ addBook: true }))

  handleAddBook = (book) => {
    this.setState({ addBook: false });
    let id = this.state.books.length + 1;
    let newBook = {
      id: id,
      title: book.title,
      author: book.author,
      genre: book.genre
    }
    this.setState({ books: [...this.state.books, newBook] })
  }

  handleEditBook = (book) => {
    this.setState(prevState => ({
      books: prevState.books.map(
        el => el.id === book.id ? book : el
      )
    }))
  }

  handleDeleteBook = (id) => {
    this.setState({ books: this.state.books.filter(el => el.id.toString() !== id) })
  }



  render() {
    return(
      <div className="Bookshelf">
        <h2>{this.props.title}</h2>
        <ul className="Bookshelf List">
          {this.renderBooks(this.state.books)}
        </ul>
        <div>
          <button onClick={this.handleAddClick}>Add Book</button>
          {this.state.addBook ? <BookForm handleOperation={this.handleAddBook} /> : null }
        </div>
      </div>
    );
  }
}

export default Bookshelf;

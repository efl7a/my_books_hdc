import React, { Component } from 'react';

import BookForm from './BookForm';
import './Book.css';

 class Book extends Component {
   constructor() {
     super();
     this.state = {
       editMode: false
     }
   }

  handleEditClick = (e) => {
    this.setState({ editMode: true })
  }

  handleDelete = (e) => {
    this.props.handleDelete(e.target.value)
  }

  handleEdit = (book) => {
    this.setState( { editMode: false })
    this.props.handleEdit(book)
  }

  renderEditMode = () => <BookForm book={this.props.book} handleOperation={this.handleEdit}/>

  renderDetailMode = () => {
    return (
      <div className="BookRow">
        <img
          className="BookImage"
          alt={this.props.book.title}
          src={this.props.book.imageUrl}
        >
        </img>
        <div className="BookDetails">
          <h3>{this.props.book.title}</h3>
          <p>Author: {this.props.book.author}</p>
          <p>Year Published: {this.props.book.year}</p>
          <p>Genre: {this.props.book.genre}</p>
        </div>
        <div className="editButtons">
          <button onClick={(e) => this.handleEditClick(e)} value={this.props.book.id}>Edit</button>
          <button onClick={(e) => this.handleDelete(e)} value={this.props.book.id}>Delete</button>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="BookRow">
        {this.state.editMode ? this.renderEditMode() : this.renderDetailMode() }
      </div>
    );
  }


}

export default Book;

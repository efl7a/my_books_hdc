import React, { Component } from 'react';

import './BookForm.css';

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.book || {
      title: '',
      author: '',
      genre: '',
      year: '',
      imageUrl: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleOperation(this.state)
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })

  }
  render() {
    return(
      <div className="bookFormContainer">
        <form
          className="bookForm"
          onSubmit={(e) => this.handleSubmit(e)}
          >
          <label>New Book</label>
          <input type="text" name="title" value={this.state.title} placeholder="title" onChange={this.handleChange} />
          <input type="text" name="author" value={this.state.author} placeholder="author" onChange={this.handleChange} />
          <input type="text" name="genre" value={this.state.genre} placeholder="genre" onChange={this.handleChange} />
          <input type="text" name="year" value={this.state.year} placeholder="year" onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default BookForm;

// AddComment.js
import React, { Component } from 'react';

class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = { comment: '' };
  }

  handleChange = (event) => {
    this.setState({ comment: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Comment Added:', this.state.comment); // Placeholder for backend
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea 
          name="comment" 
          value={this.state.comment} 
          onChange={this.handleChange} 
          placeholder="Add a comment..." 
          required 
        />
        <button type="submit">Post Comment</button>
      </form>
    );
  }
}

export default AddComment;



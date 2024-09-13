import React, { Component } from 'react';

class Comment extends Component {
  render() {
    const { user, text } = this.props.comment;
    return (
      <div className="comment">
        <p><strong>{user}</strong>: {text}</p>
      </div>
    );
  }
}

export default Comment;
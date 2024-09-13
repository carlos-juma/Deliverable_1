// CommentList.js
import React, { Component } from 'react';
import AddComment from './AddComment';

class CommentList extends Component {
  render() {
    const { comments } = this.props;
    return (
      <div>
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <p>{comment}</p>
          </div>
        ))}
        <AddComment />
      </div>
    );
  }
}

export default CommentList;
import React, { Component } from 'react';
import Comment from './Comment';
import AddComment from './AddComment';

class CommentList extends Component {
  render() {
    const { comments } = this.props; 
    return (
      <div>
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <Comment comment={comment} />
          </div>
        ))}
        <AddComment />
      </div>
    );
  }
}

export default CommentList;
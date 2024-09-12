import React, { Component } from 'react';

class Song extends Component {
  render() {
    const { title, artist } = this.props;
    return (
      <div className="song">
        <h4>{title}</h4>
        <p>{artist}</p>
      </div>
    );
  }
}

export default Song;

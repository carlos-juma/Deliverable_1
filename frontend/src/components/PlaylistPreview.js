import React, { Component } from 'react';

class PlaylistPreview extends Component {
  render() {
    const { name, description} = this.props;
    return (
      <div className="playlist-preview">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    );
  }
}

export default PlaylistPreview;

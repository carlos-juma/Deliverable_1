import React, { Component } from 'react';

class PlaylistPreview extends Component {
  render() {
    const { name, description, songs } = this.props;
    return (
      <div className="playlist-preview">
        <h3>{name}</h3>
        <p>{description}</p>
        <ul>
          {songs.map((song, index) => (
            <li key={index}>{song.title} by {song.artist}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PlaylistPreview;

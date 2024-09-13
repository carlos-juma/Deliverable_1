import React, { Component } from 'react';
import Song from './Song';
import AddSong from './AddSong';

class Playlist extends Component {
  render() {
    const { name, description, songs } = this.props.playlist;
    return (
      <div className="playlist">
        <h2>{name}</h2>
        <p>{description}</p>
        <h3>Songs:</h3>
        {songs.map((song, index) => <Song key={index} song={song} />)}
        <AddSong />
      </div>
    );
  }
}

export default Playlist;
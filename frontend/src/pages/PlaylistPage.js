// src/pages/PlaylistPage.js
import React, { Component } from 'react';
import Playlist from '../components/Playlist';

class PlaylistPage extends Component {
  render() {

    const playlist = {
      name: `Playlist`,
      description: `This is the playlist with ID.`,
      songs: [
        { title: 'Song 1', artist: 'Artist 1', album: 'Album 1' },
        { title: 'Song 2', artist: 'Artist 2', album: 'Album 2' },
        { title: 'Song 3', artist: 'Artist 3', album: 'Album 3' }
      ]
    };

    return (
      <div>
        <h1>Playlist Page</h1>
        <Playlist playlist={playlist} />
      </div>
    );
  }
}

export default PlaylistPage;

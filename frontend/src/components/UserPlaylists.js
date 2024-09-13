import React, { Component } from 'react';
const playlists = [
  {
    id: 1,
    name: 'Coding Playlist',
    description: 'Songs to listen to while coding',
  },
  {
    id: 2,
    name: 'Running Playlist',
    description: 'Songs to listen to while running',
  },
  {
    id: 3,
    name: 'Another Playlist',
    description: 'Songs to listen to while doing Something',
  },
  {
    id: 4,
    name: 'Another Playlist',
    description: 'Songs to listen to while doing Something',
  },
  {
    id: 5,
    name: 'Another Playlist',
    description: 'Songs to listen to while doing Something',
  },
  {
    id: 6,
    name: 'Another Playlist',
    description: 'Songs to listen to while doing Nothing',
  },
];

class UserPlaylists extends Component {
  render() {
    playlists  = this.props;
    return (
      <div className="playlists">
        <h3>Your Playlists</h3>
        <ul>
          {playlists.map((playlist) => (
            <li key={playlist.id}>{playlist.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserPlaylists;
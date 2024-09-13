import React from 'react';
import PlaylistPreview from '../components/PlaylistPreview'; 
import Song from '../components/Song';
import Header from '../components/Header';
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

const songs = [
    { title: 'Song 1', artist: 'Artist 1' },
    { title: 'Song 2', artist: 'Artist 2' },
    { title: 'Song 3', artist: 'Artist 3' },
    { title: 'Song 4', artist: 'Artist 4' },
    { title: 'Song 5', artist: 'Artist 5' }
  ];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlists: [],
      songs: []
    };
  }

  componentDidMount() {
    this.setState({ playlists, songs });
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Playlists Feed</h1>
        {this.state.playlists.map((playlist, index) => (
          <PlaylistPreview key={index} {...playlist}/>
        ))}

        <h1>Songs Feed</h1>
        {this.state.songs.map((song, index) => (
          <Song key={index} {...song}/>
        ))}
      </div>
    );
  }
}

export default Home;
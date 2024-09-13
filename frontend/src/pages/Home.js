import React from 'react';
import PlaylistPreview from '../components/PlaylistPreview';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlists: []
    };
  }

  async componentDidMount() {
    const response = await fetch('/api/playlists');
    const playlists = await response.json();
    this.setState({ playlists });
  }

  render() {
    return (
      <div>
        <h1>Playlists</h1>
        {this.state.playlists.map((playlist, index) => (
          <PlaylistPreview key={index} {...playlist} />
        ))}
      </div>
    );
  }
}
import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/playlist">Playlist</Link>
      </nav>
    );
  }
}

export default Header;

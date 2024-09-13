import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/profile/123">Profile</Link></li>
          <li><Link to="/playlist/456">Playlist</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Header;

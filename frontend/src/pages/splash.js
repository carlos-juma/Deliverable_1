import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Splash extends Component {
  render() {
    return (
      <div className="splash-page">
        <header>
          <h1>Welcome to Harmonize</h1>
          <p>Join us and start harmonizing today!</p>
          <Link to="/signup" className="btn">Get Started</Link>
        </header>
      </div>
    );
  }
}

export default Splash;

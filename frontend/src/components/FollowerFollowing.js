import React, { Component } from 'react';

class FollowersFollowing extends Component {
  render() {
    const { followers, following } = this.props;
    return (
      <div className="followers-following">
        <h3>Followers</h3>
        <p>{followers}</p>
        <h3>Following</h3>
        <p>{following}</p>
      </div>
    );
  }
}

export default FollowersFollowing;
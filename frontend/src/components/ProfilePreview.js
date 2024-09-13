import React, { Component } from 'react';



class ProfilePreview extends Component {
  render() {
    const { username, followers } = this.props;
    return (
      <div className="profile-preview">
        <h3>{username}</h3>
        <p>{followers} Followers</p>
      </div>
    );
  }
}

export default ProfilePreview;

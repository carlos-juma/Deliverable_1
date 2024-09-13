import React, { Component } from 'react';

class ProfileInfo extends Component {
  render() {
    return (
      <div className="profile-info">
        <h3>User Name</h3>
        <p>Email: user@example.com</p>
        {/* Add more profile information as needed */}
      </div>
    );
  }
}

export default ProfileInfo;
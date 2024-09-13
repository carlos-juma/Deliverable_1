import React from 'react';
import FollowersFollowing from '../components/FollowerFollowing';
import CreatePlaylist from '../components/CreatePlaylist';
import EditProfile from '../components/EditProfile';

class Profile extends React.Component {
  render() {
    const { username, bio, followers, following } = this.props.profile;
    return (
      <div>
        <h3>{username}</h3>
        <p>{bio}</p>
        <FollowersFollowing followers={followers} following={following} />
        <h3>Create Playlist</h3>
        <CreatePlaylist />
        <h3>Edit Profile</h3>
        <EditProfile/>
      </div>
    );
  }
}

export default Profile;
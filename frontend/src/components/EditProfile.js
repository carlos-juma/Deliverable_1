import React, { Component } from 'react';

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', bio: '' };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, bio } = this.state;
    console.log('Profile Updated:', username, bio); // Placeholder for backend
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          name="username" 
          value={this.state.username} 
          onChange={this.handleChange} 
          placeholder="Username" 
          required 
        />
        <textarea 
          name="bio" 
          value={this.state.bio} 
          onChange={this.handleChange} 
          placeholder="Bio" 
        />
        <button type="submit">Update Profile</button>
      </form>
    );
  }
}

export default EditProfile;

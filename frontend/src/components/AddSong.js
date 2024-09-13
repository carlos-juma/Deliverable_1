import React, { Component } from 'react';

class AddSong extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', artist: '' };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, artist } = this.state;
    console.log('Song Added:', title, artist); // This will be replaced with backend logic
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          name="title" 
          value={this.state.title} 
          onChange={this.handleChange} 
          placeholder="Song Title" 
          required 
        />
        <input 
          type="text" 
          name="artist" 
          value={this.state.artist} 
          onChange={this.handleChange} 
          placeholder="Artist Name" 
          required 
        />
        <button type="submit">Add Song</button>
      </form>
    );
  }
}

export default AddSong;

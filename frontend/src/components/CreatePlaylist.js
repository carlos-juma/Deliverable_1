import React, { Component } from 'react';

class CreatePlaylist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle playlist creation logic here
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="create-playlist-form">
        <div>
          <label>Playlist Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">Create Playlist</button>
      </form>
    );
  }
}

export default CreatePlaylist;
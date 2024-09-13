import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Splash from './pages/splash';
import Profile from './pages/Profile';
import Home from './pages/Home';
import PlaylistPage from './pages/PlaylistPage';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import UserPlaylists from './components/UserPlaylists';

const dummyProfile = {
  username: 'john_doe',
  bio: 'Software developer with a passion for music and technology.',
  followers: 42,
  following: 13,
};

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path="/profile/:id" element={<Profile profile={dummyProfile}/>} />
          <Route path="/playlist/:id" element={<PlaylistPage />} />
          <Route path='/playlist' element={<UserPlaylists />} />
        </Routes>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Splash from './pages/splash';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Playlist from './pages/Playlist';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/playlist/:id" element={<Playlist />} />
        </Routes>
      </Router>
    );
  }
}

export default App;

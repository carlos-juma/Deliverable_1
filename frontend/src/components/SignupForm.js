import React, { Component } from 'react';
import withNavigate from './withNavigate';

class SignupForm extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    errors: {}
  };

  validate = () => {
    const { email, password, confirmPassword } = this.state;
    let errors = {};
    if (!email.includes('@')) errors.email = 'Invalid email!';
    if (password !== confirmPassword) errors.password = 'Passwords do not match!';
    this.setState({ errors });
    return Object.keys(errors).length === 0;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validate()) {
      this.props.navigate('/home');
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password, confirmPassword, errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button type="submit">Sign Up</button>
      </form>
    );
  }
}

export default withNavigate(SignupForm);
import React, { Component } from 'react';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      errors: {}
    };
  }

  validate = () => {
    const { email, password, confirmPassword } = this.state;
    let errors = {};
    if (!email.includes('@')) errors.email = 'Invalid email!';
    if (password !== confirmPassword) errors.password = 'Passwords do not match!';
    this.setState({ errors });
    return Object.keys(errors).length === 0;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validate()) {
      // Proceed with signup logic
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { email, password, confirmPassword, errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="email" 
          name="email" 
          value={email} 
          onChange={this.handleChange} 
          placeholder="Email"
        />
        {errors.email && <p>{errors.email}</p>}
        <input 
          type="password" 
          name="password" 
          value={password} 
          onChange={this.handleChange} 
          placeholder="Password"
        />
        <input 
          type="password" 
          name="confirmPassword" 
          value={confirmPassword} 
          onChange={this.handleChange} 
          placeholder="Confirm Password"
        />
        {errors.password && <p>{errors.password}</p>}
        <button type="submit">Sign Up</button>
      </form>
    );
  }
}

export default SignupForm;

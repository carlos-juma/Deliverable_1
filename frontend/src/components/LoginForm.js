import React, { Component } from 'react';
import withNavigate from './withNavigate';

class LoginForm extends Component {
    state = {
        email: '',
        password: ''
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    validate = () => {
        const { email, password, confirmPassword } = this.state;
        let errors = {};
        if (!email.includes('@')) errors.email = 'Invalid email!';
        this.setState({ errors });
        return Object.keys(errors).length === 0;
      }

    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        console.log('Email:', email);
        console.log('Password:', password);
        if (this.validate()) {
            this.props.navigate('/home');
          }

    }

    render() {
        const { email, password } = this.state;
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
                <button type="submit">Login</button>
            </form>
        );
    }
}

export default withNavigate(LoginForm);
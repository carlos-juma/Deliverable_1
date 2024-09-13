import React, { Component } from 'react';

class LoginForm extends Component {
    state = {
        email: '',
        password: ''
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        // Add your form submission logic here
        console.log('Email:', email);
        console.log('Password:', password);
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

export default LoginForm;
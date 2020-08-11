import React, { Component } from 'react'

class UserInput extends Component {

    state = {
        username: '',
        password: '',
        usernameInput: '',
        passwordInput: '',
    }

    handleFormSubmit = e => {
        e.preventDefault();
        this.setState({ username: `${this.state.usernameInput}` })
        this.setState({ password: `${this.state.passwordInput}` })
        this.setState({ usernameInput: '' })
        this.setState({ passwordInput: '' })
        e.target.usernameInput.focus()

    }

    handleInput = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div>
                <p>Welcome {this.state.username}!</p>
                <form onSubmit={this.handleFormSubmit}>
                    <input
                        type="text" name="usernameInput" 
                        placeholder="That's not my name!"
                        value={this.state.usernameInput} onChange={this.handleInput} 
                    />
                    <input 
                        type="password"
                        name="passwordInput" 
                        value={this.state.passwordInput} 
                        onChange={this.handleInput} 
                    />
                    <input 
                        type="submit" 
                        value="Update!"
                    />
                </form>
            </div>
        )
    }

}

export default UserInput
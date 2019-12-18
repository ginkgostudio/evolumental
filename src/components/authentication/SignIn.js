import React, { Component } from 'react'

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
    render () {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <div className="input-field">
                        <label htmlFor ="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor ="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}></input>
                    </div>
                    <button className="btn blue lightn-1 z-depth-0">LOGIN</button>
                </form>
            </div>
        )
    }
}

export default SignIn
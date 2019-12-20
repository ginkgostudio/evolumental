import React, { Component } from 'react'

class CreateAccount extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        position: '',
        profLicense: ''

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
                    <div className="input-field">
                        <label htmlFor ="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor ="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor ="position">Position / degree</label>
                        <input type="text" id="position" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor ="profLicense">Professional License</label>
                        <input type="text" id="profLicense" onChange={this.handleChange}></input>
                    </div>

                    <button className="btn-large waves-effect blue darken-3 lightn-1 z-depth-0">Create Account</button>
                </form>
            </div>
        )
    }
}

export default CreateAccount
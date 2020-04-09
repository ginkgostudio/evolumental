import React, { Component } from 'react'

class PatientNewVisit extends Component {
    state = {
        visitDescription: ''
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
                    <h5 className="grey-text text-darken-3">New Visit</h5>
                    <div className="input-field">
                        <label htmlFor="visitDescription">Visit Description</label>
                        <textarea id="visitDescription" onChange={this.handleChange} className="materialize-textarea"></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn-large lightn-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default PatientNewVisit
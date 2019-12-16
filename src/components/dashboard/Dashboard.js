import React, { Component } from 'react'
import UpcomingAppointments from '../appointments/UpcomingAppointments'

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <UpcomingAppointments />
                    </div>
                    <div className="col s12 m5 offset-1">
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard
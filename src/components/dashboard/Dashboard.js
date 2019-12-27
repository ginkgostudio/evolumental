import React, { Component } from 'react'
import UpcomingAppointments from '../appointments/UpcomingAppointments'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render() {
        const { appointmentProps } = this.props;
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <UpcomingAppointments appointments={appointmentProps} />
                    </div>
                    <div className="col s12 m5 offset-1">
                        
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        appointmentProps: state.appointmentState.appointments
    }
}

export default connect(mapStateToProps)(Dashboard)
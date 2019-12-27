import React from 'react'


const AppointmentSummary = ({appointment}) => {
    return (
        <div className="card teal lighten-4 z-depth-5">
                <div className="card-content-grey-text text-darken-3">
                    <span className="card-title">{appointment.patientName}, {appointment.patientLastName}</span>
                    <p>{appointment.reason}</p>
                    <p className="grey-text">3rd September, 2am</p>
                </div>
        </div>
    )
}

export default AppointmentSummary
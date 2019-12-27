import React from 'react'
import AppointmentSummary from './AppointmentSummary'

// Recibo appointmentProps desde el Dashboard
const UpcomingAppointments = ({appointments}) => {
    return (
        <div className="upcoming-appointments section">
            { appointments && appointments.map(appointment => {
                return (
                   <AppointmentSummary appointment={ appointment } key={ appointment.id } />
                )
            })}
        </div>
    )
}

export default UpcomingAppointments

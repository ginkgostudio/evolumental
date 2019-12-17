import React from 'react'
import AppointmentSummary from './AppointmentSummary'

const UpcomingAppointments = () => {
    return (
        <div className="upcoming-appointments section">
            <AppointmentSummary />
            <AppointmentSummary />
            <AppointmentSummary />
            <AppointmentSummary />
        </div>
    )
}

export default UpcomingAppointments

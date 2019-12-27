const initState = {
    appointments : [
        {id: '1', patientName: 'Sam', patientLastName: 'Gamgy', reason: 'headaches' },
        {id: '2', patientName: 'Lora', patientLastName: 'Peterson', reason: 'seizures' },
        {id: '3', patientName: 'Dereck', patientLastName: 'Wise', reason: 'insomnia' }
    ]
}

const appointmentReducer = (state = initState, action) => {
    return state
}

export default appointmentReducer
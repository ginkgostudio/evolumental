import { combineReducers } from 'redux'
import authReducer from './authReducer'
import appointmentReducer from './appointmentReducer'

const rootReducer = combineReducers ({
    auth: authReducer,
    appointmentState: appointmentReducer 
})

export default rootReducer
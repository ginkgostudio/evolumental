import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/'>New Patient</NavLink></li>
            <li><NavLink to='/'>New Visit</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating teal lighten-2'>NV</NavLink></li>
        </ul>
    );
}

export default SignedInLinks
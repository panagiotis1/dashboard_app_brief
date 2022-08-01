import React from 'react'
import myImage from '../Assets/person_black_24dp.svg'

export default function Nav() {
    return (
        <nav className="nav">
            <a href="/" className="site-title">LOGO</a>
            <p className="dashboard">DASHBOARD</p>
            <p className="logout">LOGOUT<p> </p><img src={myImage} /></p>
        </nav>
    )
}
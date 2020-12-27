import React from 'react'
import logo from './pics/logo.png'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav>
                <Link to='/'>
                    <img src={logo} alt="logo" className="logo" />
                </Link>

                <div className="list">
                    <ul>
                        <Link to='/'><li>HOME</li></Link>
                        <Link to='/about'><li>ABOUT</li></Link>
                        <Link to='/portofilo'><li>PROTOFILO</li></Link>
                        <Link to='/services'><li>SERVICES</li></Link>
                        <Link to='/contact'><li>CONTACT ME</li></Link>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

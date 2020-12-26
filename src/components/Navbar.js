import React from 'react'
import logo from './pics/logo.png'

const Navbar = () => {
    return (
        <div>
            <nav>
                    <img src={logo} alt="logo" className="logo"/>
                    <div className="list">
                        <ul>
                            <li><a href="#">HOME</a></li>
                            <li><a href="#">ABOUT</a></li>
                            <li><a href="#">PROTOFILO</a></li>
                            <li><a href="#">SERVICES</a></li>
                            <li><a href="#">CONTACT ME</a></li>
                        </ul>
                    </div>
            </nav>
        </div>
    )
}

export default Navbar

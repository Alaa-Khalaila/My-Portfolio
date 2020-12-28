import React from 'react'
import about from './pics/about.png'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="about-cont">
            <div className="about-text">
                <h3>ABOUT ME</h3>
                <h1>PERSONAL DETAILS</h1>
                <h4>I'm Alaa Al-Khalila, 26 years old, Web developer who is intrested<br />
                in Video games, Bodybuilding, music, Movies and tv-series,<br />
                 I'm big fan of Friends series and I can't end my day without whatching it <br />
                  I build Websites for fun and I'm trying to make it my main Job<br />
                   if you want to contact with me press the button!</h4>
                <Link to="/contact">CONTACT ME</Link>
            </div>
            <div className="img-border">
                <img src={about} alt="about-img" className="about-img" />
            </div>
        </div>
    )
}

export default About

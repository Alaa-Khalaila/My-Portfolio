import React from 'react'
import about from './pics/about.png'

const About = () => {
    return (
        <div className="about-cont">
            <div className="about-text">
                <h4>ABOUT ME</h4>
                <h1>PERSONAL DETAILS</h1>
                <h5>I'm Alaa Al-Khalila, 26 years old, Web developer who is intrested<br />
                in Video games, Bodybuilding, music, Movies and tv-series,<br />
                 I'm big fan of Friends series and I can't end my day without whatching it <br />
                  I build Websites for fun and I'm trying to make it my main Job<br />
                   if you want to contact with me press the button!</h5>
                <a href="#">CONTACT ME</a>
            </div>
            <div className="img-border">
                <img src={about} alt="about-img" className="about-img" />
            </div>
        </div>
    )
}

export default About

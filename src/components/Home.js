import React from 'react';
import alaa from './pics/alaa.png';
import pattern from './pics/pattern.png'

const Home = () => {
    return (
        <div>
            <div className="info">
                <h1>I'm <span>Alaa</span> Khalila</h1>
                <p>A Software Engineer who builds a fully websites with beautiful interactive interface<br/>
                    desgins, I build to help businesses to do better online. </p>
                <a href="https://www.docdroid.net/4lJUR5H/alaa-khalila-v07-pdf" download>Download CV</a>
            </div>

            <div className="img-box">
                    <img src={pattern} alt="pat" class="back-img" />
                    <img src={alaa} alt="girl" class="main-img" />
            </div>
            <div className="contact">
                    <a href="https://www.linkedin.com/in/alaa-khalila-746a06202/"><i class="fab fa-linkedin-in"></i></a>
                    <a href="https://www.facebook.com/alaa.alkhlaila.12/"><i class="fab fa-facebook"></i></a>
                    <a href="https://github.com/Alaa-Khalaila"><i class="fab fa-github"></i></a>
            </div>
        </div>
    )
}

export default Home

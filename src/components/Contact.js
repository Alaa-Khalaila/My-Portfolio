import React from 'react'

const Contact = () => {
    return (
        <div className="cont-cont">
            <h1>Contact Me</h1>
            <h3>Here are diffrent ways to contact me, I'm availabe most of the time, just go ahead!</h3>
            <div className="conts">
                <div>
                    <a><i class="fas fa-map-marked-alt"></i></a>
                    <h2>Address</h2>
                    <h4>Jordan, Amman, Tabarbour </h4>
                </div>
                <div>
                    <a><i class="fas fa-phone-alt"></i></a>
                    <h2>Contact Number</h2>
                    <h4>+962 780071021</h4>
                </div>
                <div>
                    <a><i class="fas fa-paper-plane"></i></a>
                    <h2>Email Address</h2>
                    <h4>alkhalila.alaa@gmail.com</h4>
                </div>
                <div>
                    <a><i class="fab fa-facebook-f"></i></a>
                    <h2>Facebook</h2>
                    <a style={{backgroundColor:'white',color:'black',padding:'0',fontSize:'22px'}} href="https://www.facebook.com/alaa.alkhlaila.12">Alaa Khalila</a>
                </div>
            </div>


        </div>
    )
}

export default Contact

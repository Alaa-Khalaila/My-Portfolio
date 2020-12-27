import React from 'react'
import proj1 from './pics/project1.png'
import projj1 from './pics/projectt1.png'
import projj2 from './pics/projectt2.png'
import proj2 from './pics/project2.png'

const Projects = () => {
    return (
        <div className="proj-cont">
            <div className="proj-title">
                <h1>My Projects</h1>
            </div>
            <div className="project-imges">
                <div className="project1">
                    <div className="front">
                        <img src={proj1} alt="" />
                        <h3>Project : Grade-A</h3><br/>
                        <ul>
                            <li>Tools ( HTML, CSS, React.js, Node.js, MySQL )</li>
                            <li>Made by Team of 4 developers</li>
                            <li>Educational web that you can upload orenroll in online courses</li>
                            <li><a href="https://github.com/Alaa-Khalaila/Grade-A">Repo Code Link</a></li><br/><br/>
                        </ul>
                    </div>
                </div>
                <div className="project2">
                    <div className="front">
                        <img src={proj2} alt="" />
                        <h3>Project : Interview-Questions</h3><br/>
                        <ul>
                            <li>Tools ( HTML , CSS , React )</li>
                            <li>Made to help fresh web developers topass interview questions</li>
                            <li>Easy and simple to use</li>
                            <li><a href="https://interview-questions112.netlify.app/">Online Preview Link</a></li>
                            <li><a href="https://github.com/Alaa-Khalaila/Interview-Questions">Repo Code Link </a></li><br/>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects

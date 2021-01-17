import React from "react";
import { useState } from "react";
import project1 from "./pics/project1.png";
import project2 from "./pics/project3.png";
import project3 from "./pics/project4.png"

const Projects = () => {
  const [p1, setP1] = useState("active");
  const [p2, setP2] = useState("btn");
  const [p3, setP3] = useState("btn");
  const [p4, setP4] = useState("btn");

  const proj2 = () => {
    setP1("btn");
    setP2("active");
    setP3("btn");
    setP4("btn");
  };
  const proj1 = () => {
    setP1("active");
    setP2("btn");
    setP3("btn");
    setP4("btn");
  };
  const proj3 = () => {
    setP1("btn");
    setP2("btn");
    setP3("active");
    setP4("btn");
  };
  const proj4 = () => {
    setP1("btn");
    setP2("btn");
    setP3("btn");
    setP4("active");
  };
  return (
    <div className="projects-cont">
      <div className="projs">
        {p1 === "active" ? div1 : ""}
        {p2 === "active" ? div2 : ""}
        {p3 === "active" ? div3 : ""}
      </div>
      <div className="slider"></div>
      <div className="controller">
        <ul>
          <li className={p1} onClick={proj1}>
            01
          </li>
          <li className={p2} onClick={proj2}>
            02
          </li>
          <li className={p3} onClick={proj3}>
            03
          </li>
          {/* <li className={p4} onClick={proj4}>
            04
          </li> */}
        </ul>
      </div>
    </div>
  );
};

const div1 = (
  <div className="single-proj">
    <div className="project">
      <h1>
        Project : <span>Grade-A</span>
      </h1>
      <br></br>
      <ul>
        <li>- Technologies ( HTML, CSS, React.js, Node.js, MySQL )</li>
        <li>- Made by Team of 4 developers</li>
        <li>
          - Educational web that you can upload or enroll in online courses
        </li>
        <li>- Has 3 types of users (Admin, Instructor, Student)</li>
        <a href="https://www.youtube.com/watch?v=_0jGAJ8f-IM&t=5s&ab_channel=AlaaKhalila">
          <i class="fab fa-youtube"></i>
        </a>
        <a href="https://github.com/Alaa-Khalaila/Grade-A">
          <i class="fab fa-github"></i>
        </a>
      </ul>
    </div>
    <div className="proj-img">
      <img src={project1} alt="proj1"></img>
    </div>
  </div>
);
const div2 = (
  <div className="single-proj">
    <div className="project">
      <h1>
        Project : <span>Barakeh-Supermarket</span>
      </h1>
      <br></br>
      <ul>
        <li>- Technologies ( HTML, CSS, React.js, Node.js, MySQL )</li>
        <li>- Made to make shopping easy and from home</li>
        <li>- Has 2 types of users (Admin, Customer)</li>
        <a href="https://www.youtube.com/watch?v=cEMjU3j_yIU&t=1s&ab_channel=AlaaKhalila">
          <i class="fab fa-youtube"></i>
        </a>
        <a href="https://github.com/Alaa-Khalaila/Barakeh_Supermarket">
          <i class="fab fa-github"></i>
        </a>
      </ul>
    </div>
    <div className="proj-img">
      <img src={project2} alt="proj2"></img>
    </div>
  </div>
);
const div3 = (
  <div className="single-proj">
    <div className="project">
      <h1>
        Project : <span>Background-Music</span>
      </h1>
      <br></br>
      <ul>
        <li>- Technologies ( HTML, CSS, React.js )</li>
        <li>- Responsive for all devices</li>
        <li>- Made by only 3 hours</li>
        <a href="https://sherine-song.netlify.app/">
        <i class="fab fa-chrome"></i>
        </a>
        <a href="https://github.com/Alaa-Khalaila/Music">
          <i class="fab fa-github"></i>
        </a>
      </ul>
    </div>
    <div className="proj-img">
      <img src={project3} alt="proj3"></img>
    </div>
  </div>
);

export default Projects;

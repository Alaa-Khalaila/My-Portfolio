import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route>
            <Navbar />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/projects">
            <Projects/>
          </Route>
          <Route exact path="/skills">
            <Skills/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>

        </Router>

      </div>
    );
  }
}


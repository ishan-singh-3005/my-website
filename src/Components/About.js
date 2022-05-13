import React, { Component } from 'react';
import '../css/about.css';
import Tabs from './Tabs';

class About extends Component {
  render() {
    return (
      <div className="about">
        <Tabs/>
        <h1>About me</h1>
        <hr></hr>
        <h2>I am a second year student at the University of Toronto - Mississauga studying Computer Science</h2>
        <div class="row">
          <div class="column1">
            <img alt="Profile" src="../20210712_163242.jpg"></img>
          </div>
          <div class="column2">
            <h3 className='about-e'>
              I am a hard-working student with an aptitude of developing innovative solutions to complex problems. 
              I see myself as an optimist and self-motivated person who can work in teams contributing to the 
              ever-changing needs of business. I have an excellent academic record and diverse working experience 
              with modern technologies such as Python, Java and react.js. I seek to work in the field of 
              software development to build on my pre-existing programming knowledge while also getting a better 
              understanding of the corporate environment.
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default About
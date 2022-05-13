import React, { Component } from 'react';
import '../css/home.css';
import ParticlesBg  from "particles-bg";
import Tabs from './Tabs';

function navToLinkedIn(){
  window.open('https://www.linkedin.com/in/ishan-s/')
}

class Home extends Component {
  render() {
    var ReactRotatingText = require('react-rotating-text');
    var suffix = ['currently working as a software developer @ RBC', 'second year CS student @ UofT', 'volunteer for Visions of science', 'passionate programmer'];  
    return(
        <header className='home'>
            <Tabs/>
            <ParticlesBg type="lines" bg={true} />
            <h1 className='name'>Ishan Singh</h1>
            <h2>I am a <ReactRotatingText items={suffix} /></h2>
            {/* <a href='https://www.linkedin.com/in/ishan-s/'> */}
              <img onClick={navToLinkedIn} alt="Profile" src="../linkedin-logo.png" style={{width:'100px',}}></img>
            {/* </a> */}
        </header>
      )
  }
}

export default Home;
import React, { Component } from 'react';
import '../css/home.css';
import ParticlesBg  from "particles-bg";

class Home extends Component {
  render() {
    var ReactRotatingText = require('react-rotating-text');
    var suffix = ['software developer @ RBC', 'CS student @ UofT', 'volunteer for Visions of science'];  
    return(
        <header className='home'>
            <ParticlesBg type="lines" bg={true} />
            <h1>Ishan Singh</h1>
            <h2>I am a <ReactRotatingText items={suffix} /></h2>
        </header>
      )
  }
}

export default Home;
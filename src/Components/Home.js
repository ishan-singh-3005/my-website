import React, { Component } from 'react';
import '../css/home.css';
import ParticlesBg  from "particles-bg";
import Tabs from './Tabs';

class Home extends Component {
  render() {
    var ReactRotatingText = require('react-rotating-text');
    var suffix = ['currently working as a software developer @ RBC', 'second year CS student @ UofT', 'volunteer for Visions of science', 'passionate programmer'];  
    return(
        <header className='home'>
            <Tabs/>
            <ParticlesBg type="lines" bg={true} />
            <h1>Ishan Singh</h1>
            <h2>I am a <ReactRotatingText items={suffix} /></h2>
        </header>
      )
  }
}

export default Home;
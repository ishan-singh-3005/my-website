import React, { Component } from 'react';
import '../css/home.css';
import ParticlesBg  from "particles-bg";
import Tabs from './Tabs';

function navToLinkedIn(){
  window.open('https://www.linkedin.com/in/ishan-s/')
}

class Home extends Component {
  
  render() {
    if(this.props.data){
      var name = this.props.data[0].name;
      var suffix = this.props.data[0].suffix;
    }

    var ReactRotatingText = require('react-rotating-text');
    return(
        <header className='home'>
            <Tabs/>
            <ParticlesBg type="lines" bg={true} />
            <h1 className='name'>{name}</h1>
            <h2>I am a <ReactRotatingText items={suffix} /></h2>
            <img onClick={navToLinkedIn} alt="LinkedIn" src="../linkedin-logo.png" style={{width:'100px',}}></img>
        </header>
      )
  }
}

export default Home;
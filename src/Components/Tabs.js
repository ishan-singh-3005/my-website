import React, { Component } from 'react';
import '../css/tabs.css';

class Tabs extends Component {

  render() { 
    return(
        <div className='nav'>
          <a href="/my-website" role="button">Home</a>          
          <a href="/about" role="button">About</a>
          <a href="/work" role="button">Work</a>
          <a href="/contact" role="button">Contact</a>
        </div>
      )
  }
}

export default Tabs;
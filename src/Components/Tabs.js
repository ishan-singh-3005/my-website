import React, { Component } from 'react';
import '../css/tabs.css';

class Tabs extends Component {

  render() { 
    return(
        <div className='nav'>
          <a href="/my-website" role="button">Home</a>          
          <a href="/my-website/about" role="button">About</a>
          <a href="/my-website/work" role="button">Work</a>
          <a href="/my-website/contact" role="button">Contact</a>
        </div>
      )
  }
}

export default Tabs;
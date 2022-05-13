import React, { Component } from 'react';
import '../css/tabs.css';

class Tabs extends Component {

  render() { 
    return(
        <div className='nav'>
          <a href='/'>
            <button>Home</button>
          </a>
          <a href='/about'>
            <button>About</button>
          </a>
          <a href='/work'>
            <button>Work</button>
          </a>
          {/* <a href='/volunteer'>
            <button>Volunteer</button>
          </a> */}
          <a href='/contact'>
            <button>Contact</button>
          </a>
        </div>
      )
  }
}

export default Tabs;
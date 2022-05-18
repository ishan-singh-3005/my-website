import React, { Component } from 'react';
import '../css/about.css';
import Tabs from './Tabs';

class About extends Component {
  render() {
    if(this.props.data){
      var subHeading = this.props.data[1].subHeading;
      var education = this.props.data[1].education;
      var time = this.props.data[1].time;
      var program = this.props.data[1].program;
      var gpa = this.props.data[1].gpa;
      var aboutMe = this.props.data[1].aboutMe;
    }
    return (
      <div className="about">
        <Tabs/>
        <h1>About me</h1>
        <hr></hr>
        <h2>{subHeading}</h2>
        <h3 className='about-1'>{education}</h3>
        <h3 className='about-1'>{time}</h3>
        <h3 className='about-1'>{program}</h3>
        <h3 className='about-1'>{gpa}</h3>
        <div class="row">
          <div class="column1">
            <img alt="Profile" src="../20210712_163242.jpg"></img>
          </div>
          <div class="column2">
            <h3 className='about-e'>
              {aboutMe}
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default About
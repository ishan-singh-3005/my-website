import React, { Component } from 'react';
import '../css/about.css';
import Tabs from './Tabs';
import Tech from './Tech';

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
        <div className="section">
          <Tabs/>
          <h1>About me</h1>
          <hr></hr>
          <h2 classname='sub-heading'>{subHeading}</h2>
          <h3 className='about-1'>{education}</h3><br/>
          <h3 className='about-1'>{time}</h3><br/>
          <h3 className='about-1'>{program}</h3><br/>
          <h3 className='about-1'>{gpa}</h3>
        </div>
        <div className='section'>
          <div class="row">
            <div class="column1">
              <img alt="Profile" src={require("../images/20210712_163242.jpg")}></img>
            </div>
            <div class="column2">
              <h3 className='about-e'>
                {aboutMe}
              </h3>
            </div>
          </div>
              <h2 classname='sub-heading'>
                My projects
              </h2>
              <a className='about-e' href='https://github.com/ishan-singh-3005/my-website'>My portfolio &#x2197;</a>
              <a className='about-e' href='https://github.com/ishan-singh-3005/my-website'>Sorting Alogrithms &#x2197;</a>
              <a className='about-e' href='https://github.com/ishan-singh-3005/my-website'>Abstract Data Structures &#x2197;</a>
              <a className='about-e' href='https://github.com/ishan-singh-3005/my-website'>Python Projects &#x2197;</a>
        </div>
        <div className='section'>
          <div class="row">
            <div class="column3">
            <h2 classname='sub-heading'>Tools</h2>
                <h3 className='tools'>Git</h3>
                <h3 className='tools'>GitHub</h3>
                <h3 className='tools'>Visual Studio and Visual Studio Code</h3>
                <h3 className='tools'>JetBrains Toolbox</h3>
                <h3 className='tools'>Figma: Interface design tool</h3>
                <h3 className='tools'>Lucidchart: Diagramming application</h3>
                <h3 className='tools'>Sequelize: ORM</h3>
                <h3 className='tools'>DBeaver: Universal database tool</h3>
                <h3 className='tools'>Microsoft Office tools</h3>
            </div>
            <div class="column3">
              <h2 classname='sub-heading'>Technologies</h2>
              <Tech />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About
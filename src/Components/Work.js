import React, { Component } from 'react';
import Tabs from './Tabs';
import '../css/work.css';

class Work extends Component {
  render() {
    return (
      <div className="work">
        <Tabs/>
        <h1>Work Experience</h1>
        <hr></hr>
        <div class="row">
          <div class="column1">
            <h3 className='workplace'>RBC</h3>
            <h5>May 2022 - Present</h5>
            <h5>July 2021 - September 2021</h5>
            <h5>July 2020 - September 2020</h5>
          </div>
          <div class="column2">
            <h4><b>Software Developer</b></h4>
            <h4>
              Using leading technologies while working in an agile environment.
            </h4>
          </div>
        </div>
        <div class="row">
          <div class="column1">
            <h3 className='workplace'>University of Toronto</h3>
            <h5>May 2022 - Present</h5>
            <h5>July 2021 - September 2021</h5>
            <h5>July 2020 - September 2020</h5>
          </div>
          <div class="column2">
            <h4><b>Research Assisstant</b></h4>
            <h4>
              Using leading technologies while working in an agile environment.
            </h4>
            <h4><b>Mentor</b></h4>
            <h4>
              Using leading technologies while working in an agile environment.
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Work
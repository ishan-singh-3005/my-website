import React, { Component } from 'react';
import Tabs from './Tabs';
import '../css/work.css';

class Work extends Component {
  render() {
    if(this.props.data){
      var work = this.props.data[2].experiences.map(function(work){
        return <div className='row'>
                  <div className='column1'>
                    <h3 className='workplace'>{work.company}</h3>
                    {work.dates.map(function(x){
                      return <h5>{x}</h5>
                    })}
                  </div>
                  <div className='column2'>
                    <h4><b>{work.title}</b></h4>
                    <h4>{work.description}</h4>
                    <h4>Technologies: {work.technologies}</h4>
                  </div>
                </div>
      })
    }

    return (
      <div className="work">
        <Tabs/>
        <h1>Work Experience</h1>
        <hr></hr>
        <div>
          {work}
        </div>
      </div>
    );
  }
}

export default Work
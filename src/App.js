import './App.css';
import $ from 'jquery';
import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/Work';
import Contact from './Components/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Component } from 'react';

import data from "./data/resumeData";

export default class App extends Component {

  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home data={data}/>}/>
            <Route path="/about" element={<About data={data}/>}/>
            <Route path="/work" element={<Work data={data}/>}/>
            <Route path="/contact" element={<Contact data={data}/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

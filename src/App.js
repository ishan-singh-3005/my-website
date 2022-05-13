import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/Work';
import Volunteer from './Components/Volunteer';
import Contact from './Components/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tabs from './Components/Tabs';

function App() {
  return (
    <div className="App">
      <Tabs/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/work" element={<Work />}/>
          <Route path="/volunteer" element={<Volunteer />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

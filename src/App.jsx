import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Navbar from './components/Navigation';
import Projects from './components/Projects';
import Contact from './components/Contact';
import {Button} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
     <Router>
       <div>
         <Navbar />
         <Route exact path="/" component={Home}></Route>
         <Route path="/About" component={About}></Route>
         <Route path="/Education" component={Education}></Route>
         <Route path="/Skills" component={Skills}></Route>
         <Route path="/Projects" component={Projects}></Route>
         <Route path="/Contact" component={Contact}></Route>



       </div>
     </Router>
    );
  }
}

export default App;

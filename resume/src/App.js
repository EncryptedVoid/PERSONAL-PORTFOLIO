import React from 'react';
import { Greeting, Navbar, Footer, Skillset, Projects } from './containers';
import './App.css';

const App = () => (
  <div className="App">
    <Navbar />
    <div id="greeting">
      <Greeting />
    </div>
    <div id="skills">
      <Skillset />
    </div>
    <div id="projects">
      <Projects />
    </div>
    <Footer id="footer" />
  </div>
);

export default App;

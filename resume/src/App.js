import React from 'react';

import { Greeting, Navbar, Footer, Skillset, Projects } from './containers';

import './App.css';

const App = () => (
  <div className="App">
    <Navbar id="navbar"/>
    <Greeting id="greeting"/>
    <Skillset id="skills"/>
    <Projects id="projects"/>
    <Footer id="footer"/>
  </div>
);

export default App;
import React from 'react';

import { Header, Footer, Skillset, Projects } from './containers';

import './App.css';

const App = () => (
  <div className="App">
    <Header id="header"/>
    <Skillset id="skills"/>
    <Projects id="projects"/>
    <Footer id="footer"/>
  </div>
);

export default App;
import React from 'react';

import { Header, Footer, Skillset, Projects } from './containers';

import './App.css';

const App = () => (
  <div className="App">
    <Header/>
    <Skillset/>
    <Projects/>
    <Footer/>
  </div>
);

export default App;
import React from 'react';
import '../greeting/greeting.css';

const Greeting = () => {
  return (
    <div className="greeting_container">
      <div className="headshot">
        <h1>HEY THERE, <span>I'M ASHIQ</span>!</h1>
        <h3>FEEL FREE TO EXPLORE MY PORTFOLIO.</h3>
      </div>
      <div className="university">
        <h1>UNIVERSITY OF OTTAWA - <span className='red'>OTTA</span><span className='white'>WA, CAN</span><span className='red'>ADA</span></h1>
        <h2>BSC OF DATA SCIENCE - <span>HONOURS COMPUTER SCIENCE & MATHEMATICS</span></h2>
      </div>
    </div>
  );
};

export default Greeting;

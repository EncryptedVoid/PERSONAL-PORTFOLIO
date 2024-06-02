import React from 'react'

const Header = () => {
  return (
    <div>

      <div className="navbar__container">
        <ul className="navbar">
          <li><div className="navbar-home"><a href="#header">LANDING PAGE</a></div></li>
          <li><div className="navbar-skills"><a href="#skills">SKILLS</a></div></li>
          <li><div className="navbar-projects"><a href="#projects">PROJECTS</a></div></li>
        </ul>
      </div>

      <div className="home">
        <div className="home__greeting">
          <h1>HEY, I'M ASHIQ!</h1>
          <h2>I'M A 2ND YEAR CANADIAN SOFTWARE ENGINEERING STUDENT</h2>
        </div>

        <div className="home__contact">
          <h2>CONTACT ME</h2>
          <button>GMAIL</button>
          <button>LINKEDIN</button>
          <button>GITHUB</button>
          <button>LEETCODE</button>
        </div>
      </div>

    </div>
  )
}

export default Header
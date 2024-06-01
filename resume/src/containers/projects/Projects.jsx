import React from 'react'
import styles from '../projects/projects.css'

const Projects = () => {
  return (
    <div className="projects__container">

      <h2>PROJECTS</h2>

      <button className="projects__card">

          <div className="projects__details">

              <h1 className="projects__name">TASKS MANAGER</h1>

              <h2 className="projects__desc">To-do list and tasks organizer</h2>

              <ul className="projects__skills">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JAVASCRIPT</li>
              </ul>

          </div>

      </button>
      <button className="projects__card">

          <div className="projects__details">

              <h1 className="projects__name">JUDOKO</h1>

              <h2 className="projects__desc">Java based Sodoko runs in the console</h2>

              <ul className="projects__skills">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JAVASCRIPT</li>
              </ul>

          </div>

      </button>  
      <button className="projects__card">

          <div className="projects__details">

              <h1 className="projects__name">WEATHER DASHBOARD</h1>

              <h2 className="projects__desc">Simple but elegant weather dashboard</h2>

              <ul className="projects__skills">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JAVASCRIPT</li>
              </ul>

          </div>

      </button> 
    </div>
  )
}

export default Projects
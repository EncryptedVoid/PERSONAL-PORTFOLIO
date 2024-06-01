import React from 'react'
import styles from '../projects/projects.css'

const Projects = () => {
  return (
    <div class="projects__container">

      <h2>PROJECTS</h2>

      <button class="projects__card">

          <div class="projects__details">

              <h1 class="projects__name">TASKS MANAGER</h1>

              <h2 class="projects__desc">To-do list and tasks organizer</h2>

              <ul class="projects__skills">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JAVASCRIPT</li>
              </ul>

          </div>

      </button>
      <button class="projects__card">

          <div class="projects__details">

              <h1 class="projects__name">JUDOKO</h1>

              <h2 class="projects__desc">Java based Sodoko runs in the console</h2>

              <ul class="projects__skills">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JAVASCRIPT</li>
              </ul>

          </div>

      </button>  
      <button class="projects__card">

          <div class="projects__details">

              <h1 class="projects__name">WEATHER DASHBOARD</h1>

              <h2 class="projects__desc">Simple but elegant weather dashboard</h2>

              <ul class="projects__skills">
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
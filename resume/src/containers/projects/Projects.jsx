import React from 'react';
import styles from '../projects/projects.css';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      name: 'TASKS MANAGER',
      desc: 'To-do list and tasks organizer',
      skills: ['HTML', 'CSS', 'JAVASCRIPT'],
    },
    {
      name: 'JUDOKO',
      desc: 'Java based Sodoko runs in the console',
      skills: ['JAVA'],
    },
    {
      name: 'WEATHER DASHBOARD',
      desc: 'Simple but elegant weather dashboard',
      skills: ['HTML', 'CSS', 'JAVASCRIPT'],
    },
    {
        name: 'PERSONAL PORTFOLIO',
        desc: 'Personally developed online resume',
        skills: ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'BEM'],
    }
  ];

  return (
    <div className="project-container">
        <h2 className="project-container__title">PROJECTS</h2>

        <div className='project-container__card-deck'>
        {projects.map((project, index) => (
            <ProjectCard
                key={index}
                name={project.name}
                desc={project.desc}
                skills={project.skills}
            />
        ))}
        </div>
    </div>
  );
};

export default Projects;

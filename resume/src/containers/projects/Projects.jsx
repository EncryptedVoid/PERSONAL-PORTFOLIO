import React from 'react';
import styles from '../projects/projects.css';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      name: 'Personal Portfolio',
      desc: 'To-do list and tasks organizer',
      skills: ['REACT', 'CSS', 'NODE.JS', 'GOOGLE MATERIAL'],
      background: '/assets/portfolio_banner.webp', // Add the background image path
    },
    {
      name: 'Luxury Restaurant',
      desc: 'Java based Sudoku runs in the console',
      skills: ['REACT', 'CSS', 'NODE.JS'],
      background: '/assets/luxury-restaurant_banner.webp', // Add the background image path
    },
    {
      name: 'Judoko',
      desc: 'Simple but elegant weather dashboard',
      skills: ['JAVA', 'INTELLIJ', 'CMD'],
      background: '/assets/judoko_banner.webp', // Add the background image path
    },
    {
      name: 'ChatGPT UI Revamped',
      desc: 'Personally developed online resume',
      skills: ['REACT', 'CSS', 'NODE.JS', 'GOOGLE MATERIAL'],
      background: '"/assets/chatgpt-ui-revamp_banner.webp"', // Add the background image path
    },
    {
      name: 'To Do List react App',
      desc: 'Personally developed online resume',
      skills: ['REACT', 'CSS', 'NODE.JS', 'GOOGLE MATERIAL'],
      background: '/assets/to-do-list-webapp_banner.webp', // Add the background image path
    },
    {
      name: 'Weather react App',
      desc: 'Personally developed online resume',
      skills: ['REACT', 'CSS', 'NODE.JS', 'GOOGLE MATERIAL'],
      background: '/assets/weather-webapp_banner.webp', // Add the background image path
    },
    {
      name: 'Alarm react App',
      desc: 'Personally developed online resume',
      skills: ['REACT', 'CSS', 'NODE.JS', 'GOOGLE MATERIAL'],
      background: '/assets/alarm-webapp_banner.webp', // Add the background image path
    },
    {
      name: 'Fancy Sushi Restaurant',
      desc: 'Personally developed online resume',
      skills: ['REACT', 'CSS', 'NODE.JS', 'GOOGLE MATERIAL'],
      background: '/assets/sushi-restaurant_banner.webp', // Add the background image path
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
            background={project.background} // Pass the background prop
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

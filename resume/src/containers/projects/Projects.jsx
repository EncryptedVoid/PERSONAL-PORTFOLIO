import React from 'react';
import styles from '../projects/projects.css';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      name: 'Personal Portfolio',
      desc: 'React-based Tech Resume Portfolio',
      skills: ['REACT', 'CSS3', 'NODE.JS', 'GOOGLE MATERIAL'],
      background: '/assets/portfolio_banner.webp',
      link: 'https://yourlink1.com'
    },
    {
      name: 'Luxury Restaurant',
      desc: 'Mock Website for a Luxury Restaurant',
      skills: ['REACT', 'CSS3', 'NODE.JS'],
      background: '/assets/luxury-restaurant_banner.webp',
      link: 'https://yourlink2.com'
    },
    {
      name: 'Judoku',
      desc: 'Java-based Sudoku game',
      skills: ['JAVA', 'INTELLIJ', 'CMD'],
      background: '/assets/judoko_banner.webp',
      link: 'https://yourlink3.com'
    },
    {
      name: 'ChatGPT UI Revamped',
      desc: 'Updated UI for OpenAIs ChatGPT',
      skills: ['REACT', 'CSS3', 'NODE.JS', 'GOOGLE MATERIAL'],
      background: '/assets/chatgpt-ui-revamp_banner.webp',
      link: 'https://yourlink4.com'
    },
    {
      name: 'To Do List react App',
      desc: 'Personal To Do List and Tasks Tracker',
      skills: ['REACT', 'CSS3', 'NODE.JS', 'GOOGLE MATERIAL'],
      background: '/assets/to-do-list-webapp_banner.webp',
      link: 'https://yourlink5.com'
    },
    {
      name: 'Weather react App',
      desc: 'Personal Weather App with Modern UI',
      skills: ['REACT', 'CSS3', 'NODE.JS', 'GOOGLE MATERIAL'],
      background: '/assets/weather-webapp_banner.webp',
      link: 'https://yourlink6.com'
    },
    {
      name: 'Alarm react App',
      desc: 'Personal Alarm App with Modern UI',
      skills: ['REACT', 'CSS3', 'NODE.JS', 'GOOGLE MATERIAL'],
      background: '/assets/alarm-webapp_banner.webp',
      link: 'https://yourlink7.com'
    },
    {
      name: 'Fancy Sushi Buffet',
      desc: 'Mock Website for a Sushi Buffet',
      skills: ['REACT', 'CSS3', 'NODE.JS', 'GOOGLE MATERIAL'],
      background: '/assets/sushi-restaurant_banner.webp',
      link: 'https://yourlink8.com'
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
            background={project.background}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
  
  
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
            background={project.background}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
  

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
            background={project.background}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

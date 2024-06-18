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
      link: 'https://github.com/EncryptedVoid/PERSONAL-PORTFOLIO'
    },
    {
      name: 'Luxury Restaurant',
      desc: 'Mock Website for a Luxury Restaurant',
      skills: ['REACT', 'CSS3', 'NODE.JS'],
      background: '/assets/luxury-restaurant_banner.webp',
      link: 'https://github.com/EncryptedVoid/react-restuarant-website'
    },
    {
      name: 'Judoku',
      desc: 'Java-based Sudoku game',
      skills: ['JAVA', 'INTELLIJ', 'CMD'],
      background: '/assets/judoko_banner.webp',
      link: 'https://github.com/EncryptedVoid/SUDOKO_GAME_JAVA'
    },
    {
      name: 'ChatGPT UI Revamped',
      desc: 'Updated UI for OpenAIs ChatGPT',
      skills: ['REACT', 'CSS3', 'NODE.JS', 'GOOGLE MATERIAL'],
      background: '/assets/chatgpt-ui-revamp_banner.webp',
      link: 'https://github.com/EncryptedVoid/CHATGPT-UI-REVAMPED'
    },
    {
      name: 'To Do List react App',
      desc: 'Personal To Do List and Tasks Tracker',
      skills: ['REACT', 'CSS3', 'NODE.JS', 'GOOGLE MATERIAL', 'DALLE'],
      background: '/assets/to-do-list-webapp_banner.webp',
      link: 'https://github.com/EncryptedVoid/TO-DO-LIST-WEB-APP'
    },
    {
      name: 'Weather react App',
      desc: 'Personal Weather App with Modern UI',
      skills: ['REACT', 'CSS3', 'NODE.JS', 'GOOGLE MATERIAL'],
      background: '/assets/weather-webapp_banner.webp',
      link: 'https://github.com/EncryptedVoid/WEATHER-WEB-APP'
    },
    {
      name: 'Alarm react App',
      desc: 'Personal Alarm App with Modern UI',
      skills: ['REACT', 'CSS3', 'NODE.JS', 'GOOGLE MATERIAL', 'DALLE'],
      background: '/assets/alarm-webapp_banner.webp',
      link: 'https://github.com/EncryptedVoid/ALARM-WEB-APP'
    },
    {
      name: 'Daily Mini Projects',
      desc: 'Short projects for mental practice',
      skills: ['JAVA', 'C++', 'C', 'PYTHON'],
      background: '/assets/daily_mini_project_banner.webp',
      link: 'https://github.com/EncryptedVoid/DAILY_MINI_PROJECT'
    },
    {
      name: '3D Portfolio Mockup',
      desc: 'Mock Portfolio with 3D animations',
      skills: ['REACT', 'CSS3', 'THREE.JS'],
      background: '/assets/3D_portfolio_banner.webp',
      link: 'https://github.com/EncryptedVoid/3D-PORTFOLIO-MOCKUP'
    },
    {
      name: 'Mock Login Page',
      desc: 'Practice Login Forms',
      skills: ['HTML5', 'CSS3', 'DALLE'],
      background: '/assets/login_page_project_banner.webp',
      link: 'https://github.com/EncryptedVoid/LOGIN-PAGE'
    },
    {
      name: 'Dreamscape Gardens',
      desc: 'Mock Landscaping Business Website',
      skills: ['HTML5', 'CSS3', 'DALLE'],
      background: '/assets/dreamscape_gardens_banner.webp',
      link: 'https://github.com/EncryptedVoid/Dreamscape-Gardens'
    },
    {
      name: 'WalkForWenjack Leaderboard',
      desc: 'Leaderboard for Tracking Fundraising',
      skills: ['HTML5', 'CSS3'],
      background: '/assets/walkforwenjack_banner.webp',
      link: 'https://github.com/EncryptedVoid/WalkForWenjack.github.io'
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

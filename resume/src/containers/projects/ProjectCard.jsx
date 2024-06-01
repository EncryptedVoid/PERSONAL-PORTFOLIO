import React from 'react';
import styles from '../projects/projectCard.css';

const ProjectCard = ({ name, desc, skills, background }) => {
  return (
    <button className="project-card" style={{ backgroundImage: `url(${background})` }}>
      <div className="project-card__details">
        <h1 className="project-card__name">{name}</h1>
        <h2 className="project-card__desc">{desc}</h2>
        <ul className="project-card__skills">
          {skills.map((skill, index) => (
            <li key={index} className="project-card__skill-item">{skill}</li>
          ))}
        </ul>
      </div>
    </button>
  );
};

export default ProjectCard;

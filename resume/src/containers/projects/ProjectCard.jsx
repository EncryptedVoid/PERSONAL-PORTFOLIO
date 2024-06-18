import React from 'react';
import confetti from 'canvas-confetti';
import styles from '../projects/projectCard.css';

const ProjectCard = ({ name, desc, skills, background, link }) => {
  const handleClick = (event) => {
    const { clientX, clientY } = event;

    // Trigger confetti effect at the cursor position
    confetti({
      particleCount: 100,
      spread: 70,
      origin: {
        x: clientX / window.innerWidth,
        y: clientY / window.innerHeight
      }
    });

    // Redirect to the provided link
    window.location.href = link;
  };

  return (
    <button className="project-card" style={{ backgroundImage: `url(${background})` }} onClick={handleClick}>
      <div className="overlay">
        <span className="gradient-text">EXPLORE PROJECT!</span>
      </div>
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

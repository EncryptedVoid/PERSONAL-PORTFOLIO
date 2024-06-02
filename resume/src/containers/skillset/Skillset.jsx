import React from 'react';
import PropTypes from 'prop-types';
import '../skillset/skillset.css'; // Plain CSS import

const Skill = ({ name, image }) => (
  <li className="skillset__list-item">
    <img src={image} alt={`${name} logo`} className="skillset__icon" loading="lazy" />
    <span className="skillset__text">{name}</span>
  </li>
);

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

const SkillList = ({ title, skills }) => (
  <div className='SkillBlock'>
    <h2 className="skillset__category-title">{title}</h2>
    <ul className="skillset__list">
      {skills.map(skill => (
        <Skill key={skill.name} name={skill.name} image={skill.image} />
      ))}
    </ul>
  </div>
);

SkillList.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const Skillset = () => {
  const programmingSkills = [
    { name: 'JAVA', image: '/assets/java_logo.webp' },
    { name: 'C++', image: '/assets/cpp_logo.png' },
    { name: 'C LANGUAGE', image: '/assets/c_logo.png' },
    { name: 'PYTHON', image: '/assets/python_logo.png' },
  ];
  const frontEndSkills = [
    { name: 'HTML5', image: '/assets/html_logo.png' },
    { name: 'CSS3', image: '/assets/css_logo.png' },
    { name: 'JAVASCRIPT', image: '/assets/javascript_logo.webp' },
    { name: 'TYPESCRIPT', image: '/assets/typescript_logo.png' },
    { name: 'NODE.JS', image: '/assets/nodejs_logo.svg' },
    { name: 'REACTJS', image: '/assets/react_logo.png' },
    { name: 'BOOTSTRAP', image: '/assets/bootstrap_logo.png' },
    { name: 'TAILWIND', image: '/assets/tailwind_logo.png' },
    { name: 'MATERIALIZE', image: '/assets/materialize_logo.png' },
    { name: 'FIGMA', image: '/assets/figma_logo.png' },
  ];
  const aiSkills = [
    { name: 'TENSORFLOW', image: '/assets/tensorflow_logo.png' },
    { name: 'SCI-KIT LEARN', image: '/assets/scikit-learn_logo.png' },
    { name: 'WEIGHTS & BIASES', image: '/assets/wb_logo.svg' },
    { name: 'PANDAS', image: '/assets/pandas_logo.png' },
    { name: 'OPENCV', image: '/assets/opencv_logo.webp' },
  ];
  const roboticsSkills = [
    { name: 'UBUNTU LINUX', image: '/assets/ubuntu_logo.png' },
    { name: 'ROS', image: '/assets/ros_logo.png' },
    { name: 'ARDUINO', image: '/assets/arduino_logo.png' },
    { name: 'GIT', image: '/assets/git_logo.png' },
    { name: 'RASPBERRY PI', image: '/assets/raspberry-pi_logo.svg' },
    { name: 'SOLDERING', image: '/assets/soldering_logo.png' },
    { name: '3D PRINTING', image: '/assets/3dprinting_logo.png' },
    { name: 'ULTIMAKER CURA', image: '/assets/cura_logo.png' },
    { name: 'TINKER CAD', image: '/assets/tinkercad_logo.png' },
    { name: 'AUTOCAD', image: '/assets/autocad_logo.png' },
    { name: 'DOCKER', image: '/assets/docker_logo.webp' },
  ];
  const linguisticSkills = [
    { name: 'ENGLISH', image: '/assets/canada_logo.png' },
    { name: 'FRENCH', image: '/assets/france_logo.png' },
    { name: 'BENGALI', image: '/assets/bangladesh_logo.png' },
  ];

  return (
    <div className="skillset">
      <h1 className="skillset__title">SKILLSET</h1>
      <div className='skillset-grouping'>
        <li><SkillList title="LANGUAGES" skills={programmingSkills} /></li>
        <li><SkillList title="FRONTEND" skills={frontEndSkills} /></li>
        <li><SkillList title="AI&ML" skills={aiSkills} /></li>
        <li><SkillList title="OTHER" skills={roboticsSkills} /></li>
        <li><SkillList title="SPOKEN" skills={linguisticSkills} /></li>
      </div>
    </div>
  );
};

export default Skillset;

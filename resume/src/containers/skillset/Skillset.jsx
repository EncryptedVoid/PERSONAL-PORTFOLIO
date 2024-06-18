import React from 'react';
import '../skillset/skillset.css'; // Plain CSS import

const frontendSkills = [
  { imgSrc: 'assets/html_logo.png', label: 'HTML5', link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5' },
  { imgSrc: 'assets/css_logo.png', label: 'CSS3', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { imgSrc: 'assets/javascript_logo.webp', label: 'JAVASCRIPT', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { imgSrc: 'assets/react_logo.png', label: 'REACTJS', link: 'https://reactjs.org/' },
  { imgSrc: 'assets/bootstrap_logo.png', label: 'BOOTSTRAP', link: 'https://getbootstrap.com/' },
  { imgSrc: 'assets/tailwind_logo.png', label: 'TAILWIND', link: 'https://tailwindcss.com/' },
  { imgSrc: 'assets/materialize_logo.png', label: 'MATERIALIZE', link: 'https://materializecss.com/' },
  { imgSrc: 'assets/figma_logo.png', label: 'FIGMA', link: 'https://www.figma.com/' },
];

const aimlSkills = [
  { imgSrc: 'assets/tensorflow_logo.png', label: 'TENSORFLOW', link: 'https://www.tensorflow.org/' },
  { imgSrc: 'assets/scikit-learn_logo.png', label: 'SCI-KIT LEARN', link: 'https://scikit-learn.org/' },
  { imgSrc: 'assets/wb_logo.png', label: 'WEIGHTS & BIASES', link: 'https://www.wandb.com/' },
  { imgSrc: 'assets/pandas_logo.png', label: 'PANDAS', link: 'https://pandas.pydata.org/' },
  { imgSrc: 'assets/opencv_logo.webp', label: 'OPENCV', link: 'https://opencv.org/' },
];

const roboticsSkills = [
  { imgSrc: 'assets/arduino_logo.png', label: 'ARDUINO', link: 'https://www.arduino.cc/' },
  { imgSrc: 'assets/raspberry-pi_logo.svg', label: 'RASPBERRY PI', link: 'https://www.raspberrypi.org/' },
  { imgSrc: 'assets/ubuntu_logo.png', label: 'UBUNTU LINUX', link: 'https://ubuntu.com/' },
  { imgSrc: 'assets/ros_logo.png', label: 'ROBOT OPERATING SYSTEM', link: 'https://www.ros.org/' },
  { imgSrc: 'assets/git_logo.png', label: 'GIT', link: 'https://git-scm.com/' },
  { imgSrc: 'assets/soldering_logo.png', label: 'SOLDERING', link: 'https://en.wikipedia.org/wiki/Soldering' },
  { imgSrc: 'assets/3dprinting_logo.png', label: '3D PRINTING', link: 'https://all3dp.com/what-is-3d-printing/' },
  { imgSrc: 'assets/cura_logo.png', label: 'ULTIMAKER CURA', link: 'https://ultimaker.com/software/ultimaker-cura' },
  { imgSrc: 'assets/tinkercad_logo.png', label: 'TINKER CAD', link: 'https://www.tinkercad.com/' },
  { imgSrc: 'assets/autocad_logo.png', label: 'AUTOCAD', link: 'https://www.autodesk.com/products/autocad/overview' },
];

const miscSkills = [
  { imgSrc: 'assets/java_logo.webp', label: 'JAVA', link: 'https://www.java.com/' },
  { imgSrc: 'assets/cpp_logo.png', label: 'C++', link: 'https://isocpp.org/' },
  { imgSrc: 'assets/c_logo.png', label: 'C LANGUAGE', link: 'https://en.wikipedia.org/wiki/C_(programming_language)' },
  { imgSrc: 'assets/python_logo.png', label: 'PYTHON', link: 'https://www.python.org/' },
  { imgSrc: 'assets/typescript_logo.png', label: 'TYPESCRIPT', link: 'https://www.typescriptlang.org/' },
  { imgSrc: 'assets/nodejs_logo.svg', label: 'NODE.JS', link: 'https://nodejs.org/' },
  { imgSrc: 'assets/docker_logo.webp', label: 'DOCKER', link: 'https://www.docker.com/' },
  { imgSrc: 'assets/canada_logo.png', label: 'ENGLISH', link: 'https://en.wikipedia.org/wiki/English_language' },
  { imgSrc: 'assets/france_logo.png', label: 'FRENCH', link: 'https://en.wikipedia.org/wiki/French_language' },
  { imgSrc: 'assets/bangladesh_logo.png', label: 'BENGALI', link: 'https://en.wikipedia.org/wiki/Bengali_language' },
];

const Skill = ({ imgSrc, altText, label, link, category }) => (
  <li className={`skillset__item ${category}`} onClick={() => window.location.href = link}>
    <img src={imgSrc} alt={altText} loading="lazy" className="skillset__icon" />
    <span className="skillset__label">{label}</span>
  </li>
);

const Skillset = () => {
  return (
    <div className="skillset">
      <h1 className="skillset__title">SKILLSET</h1>
      <ul className="skillset__legend">
        <li className="skillset__legend-item frontend"><span>FRONT-END SKILLS</span></li>
        <li className="skillset__legend-item aiml"><span>AI & MACHINE LEARNING</span></li>
        <li className="skillset__legend-item robotics"><span>ROBOTICS & ENGINEERING</span></li>
        <li className="skillset__legend-item misc"><span>OTHER</span></li>
      </ul>
      <ul className="skillset__list">
        {frontendSkills.map(({ imgSrc, label, link }, index) => (
          <Skill key={index} imgSrc={imgSrc} altText={label} label={label} link={link} category="frontend" />
        ))}
        {aimlSkills.map(({ imgSrc, label, link }, index) => (
          <Skill key={index} imgSrc={imgSrc} altText={label} label={label} link={link} category="aiml" />
        ))}
        {roboticsSkills.map(({ imgSrc, label, link }, index) => (
          <Skill key={index} imgSrc={imgSrc} altText={label} label={label} link={link} category="robotics" />
        ))}
        {miscSkills.map(({ imgSrc, label, link }, index) => (
          <Skill key={index} imgSrc={imgSrc} altText={label} label={label} link={link} category="misc" />
        ))}
      </ul>
    </div>
  );
};

export default Skillset;

import React from 'react';
import styles from '../navbar/navbar.css';

const buttonsData = [
  { imgSrc: '/assets/landing-page_logo.png', label: 'HOME', link: '/https://google.ca' },
  { imgSrc: '/assets/skills_logo.png', label: 'SKILLS', link: '#skills' },
  { imgSrc: '/assets/projects_icon.png', label: 'PROJECTS', link: '/projects' },
  { imgSrc: '/assets/gmail_logo.webp', label: 'EMAIL', link: 'mailto:ashiqarib@gmail.com' },
  { imgSrc: '/assets/linkedIn_logo.png', label: 'LINKEDIN', link: 'https://www.linkedin.com/in/ashiq-gazi-090a6b213/' },
  { imgSrc: '/assets/github_logo.png', label: 'GITHUB', link: 'https://github.com/EncryptedVoid' },
  { imgSrc: '/assets/leetcode_logo.png', label: 'LEETCODE', link: 'https://leetcode.com/u/EncryptedAsh/' },
];


const Button = ({ imgSrc, altText, label, link }) => (
  <button onClick={() => window.location.href = link}>
    <span><img src={imgSrc} alt={altText} /></span>
    <h3>{label}</h3>
  </button>
);

const NavBar = () => {
  return (
    <div className="Navbar">
      {buttonsData.map(({ imgSrc, label, link }, index) => (
        <Button key={index} imgSrc={imgSrc} altText={label} label={label} link={link} />
      ))}
    </div>
  );
};

export default NavBar;
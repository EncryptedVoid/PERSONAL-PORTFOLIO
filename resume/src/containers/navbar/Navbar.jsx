import React from 'react';
import styles from '../navbar/navbar.css';

const navigationData = [
  { imgSrc: '/assets/home_logo.png', label: 'HOME', link: '/https://google.ca' },
  { imgSrc: '/assets/skills_logo.png', label: 'SKILLS', link: '#skills' },
  { imgSrc: '/assets/projects_icon.png', label: 'PROJECTS', link: '/projects' },
];

const contactData = [
  { imgSrc: '/assets/gmail_logo.webp', link: 'mailto:ashiqarib@gmail.com' },
  { imgSrc: '/assets/linkedIn_logo.png', link: 'https://www.linkedin.com/in/ashiq-gazi-090a6b213/' },
  { imgSrc: '/assets/github_logo.png', link: 'https://github.com/EncryptedVoid' },
  { imgSrc: '/assets/leetcode_logo.png', link: 'https://leetcode.com/u/EncryptedAsh/' },
  { imgSrc: '/assets/wb_logo.png', link: 'https://wandb.ai/ashiqarib' },
  { imgSrc: '/assets/youtube_logo.webp', link: 'https://www.youtube.com/@DOCTOR-ASH' },
  { imgSrc: '/assets/instagram_logo.png', link: 'https://www.instagram.com/official_dr.ash/' },
];

const NavButton = ({ imgSrc, altText, label, link }) => (
  <button onClick={() => window.location.href = link} className="Navbar__button navigation-button">
    <span><img src={imgSrc} alt={altText} className="Navbar__image" /></span>
    {label && <h3 className="Navbar__label">{label}</h3>}
  </button>
);

const ContButton = ({ imgSrc, altText, label, link }) => (
  <button onClick={() => window.location.href = link} className="Navbar__button contact-button">
    <span><img src={imgSrc} alt={altText} className="Navbar__image" /></span>
    {label && <h3 className="Navbar__label">{label}</h3>}
  </button>
);

const NavBar = () => {
  return (
    <div className="Navbar">
      {navigationData.map(({ imgSrc, label, link }, index) => (
        <NavButton key={index} imgSrc={imgSrc} altText={label} label={label} link={link} />
      ))}
      {contactData.map(({ imgSrc, link }, index) => (
        <ContButton key={index} imgSrc={imgSrc} altText="" link={link} />
      ))}
    </div>
  );
};

export default NavBar;

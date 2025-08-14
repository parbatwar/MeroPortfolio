import React from 'react';

import styles from "../Footer/Footer.module.css"

export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <ul className={styles.footerLinks}>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="https://www.linktr.ee/ParbatSunuwar" target="_blank" rel="noopener noreferrer">More+</a></li>
      </ul>
      <p className={styles.footerInfo}>Copyright &#169; 2025 Parbat Sunuwar. All Rights Reserved.</p>
    </footer>
  );
};

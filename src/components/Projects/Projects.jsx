import React from 'react';
import projectOne from "../../assets/projects/pr1.png";
import projectTwo from "../../assets/projects/pr2.png";
import projectThree from "../../assets/projects/pr3.png";

import styles from './Project.module.css';

const projects = [
  {
    image: projectOne,
    title: "Ecommerce",
    github: "https://github.com/parbatwar/GBazaar.git",
    demo: "https://github.com"
  },
  {
    image: projectTwo,
    title: "LMS",
    github: "https://github.com/parbatwar/jhandai_padheko.git",
    demo: "https://github.com"
  },
  {
    image: projectThree,
    title: "Marketplace",
    github: "https://github.com/parbatwar/summerclass.git",
    demo: "https://github.com"
  }
];

export const Projects = () => {
  return (
    <section className={styles.projectContainer} id='projects'>
      <div className={styles.projectHead}>
        <p className={styles.projectP1}>Browse My Recent</p>
        <h1 className={styles.projectH1}>Projects</h1>
      </div>

      <div className={styles.projectContent}>
        {projects.map((proj, index) => (
          <div className={styles.projectBox} key={index}>
            <img 
              src={proj.image} 
              alt={proj.title}
              className={styles.projectImage}
            />
            <h2 className={styles.projectTitle}>{proj.title}</h2>
            <div className={styles.btnContainer}>
              <button
                className={styles.btnOne}
                onClick={() => window.location.href = proj.github}>
                Github
              </button>
              <button
                className={styles.btnTwo}
                onClick={() => window.location.href = proj.demo}>
                Live Demo
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

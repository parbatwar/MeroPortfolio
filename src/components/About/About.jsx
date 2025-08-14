import React from 'react';
import abouPic from "../../assets/about/aboutP.jpg";
import { HiAcademicCap } from "react-icons/hi";

import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.aboutContainer} id='about'>
      <div className={styles.aboutHead}>
        <p className={styles.aboutP1}>Get To Know Me</p>
        <h1 className={styles.aboutH1}>About Me</h1>
      </div>
      <div className={styles.aboutContent}>
        <img 
          src={abouPic}
          alt="About Me Image"
          className={styles.aboutPic}
        />
        <div className={styles.detailsContainer}>
          <div className={styles.aboutBox}>
            <HiAcademicCap size={40} />
            <h3>Education</h3>
            <p>BSc(Hons) Computing</p>
            <p>London Metropolitan University</p>
          </div>
          <div className={styles.textContainer}>
            <p>
              I am a passionate web developer with a focus on creating dynamic and responsive web applications. 
              I have experience in various technologies and frameworks, and I am always eager to learn more.
              I enjoy turning a creative vision into a seamless and intuitive user experience that truly comes to life.
            </p>
          </div>  
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import profilePic from "../../assets/hero/profilepic.png";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}> 
      <img
        src={profilePic}
        alt="Profile Picture"
        className={styles.heroImg}
      />
      <div className={styles.content}>
        <p className={styles.textP1}>Hello, I'm</p>
        <h1 className={styles.title}>Parbat Sunuwar</h1>
        <p className={styles.textP2}>Web Developer</p>

        <div className={styles.btnContainer}>
          <button 
            className={styles.btnColor1}
            onClick={() => window.open('../../../public/CV_Parbat_Sunuwar.pdf')}
          >
            Download CV
          </button>
          <button 
            className={styles.btnColor2}
            onClick={() => window.location.href = './#contact'}
          >
            Contact Info
          </button>
        </div>
      </div>
    </section>
  ); 
};

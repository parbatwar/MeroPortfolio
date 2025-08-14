import React from 'react';
import { GoCheckCircleFill } from "react-icons/go";

import styles from "./Skills.module.css";

export const Skills = () => {
  return (
    <section className={styles.skillContainer} id='skills'>
      <div className={styles.skillHead}>
        <p className={styles.skillP1}>My Technical Level</p>
        <h1 className={styles.skillH1}>Skills</h1>
      </div>
      <div className={styles.skillContent}>
        <div className={styles.skillBox}>
          <h2 className={styles.skillTitle}>Frontend Development</h2>
          <div className={styles.articleBox}>
            <article>
              <GoCheckCircleFill size={25} />
              <div >
                <h3>HTML</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <GoCheckCircleFill size={25} />
              <div>
                <h3>CSS</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <GoCheckCircleFill size={25} />
              <div>
                <h3>JavaScript</h3>
                <p>Basic</p>
              </div>
            </article>
            <article>
              <GoCheckCircleFill size={25} />
              <div>
                <h3>React.Js</h3>
                <p>Basic</p>
              </div>
            </article>
          </div>
        </div>
        <div className={styles.skillBox}>
          <h2 className={styles.skillTitle}>Backend Development</h2>
          <div className={styles.articleBox}>
            <article>
              <GoCheckCircleFill size={25} />
              <div>
                <h3>PostgreSQL</h3>
                <p>Basic</p>
              </div>
            </article>
            <article>
              <GoCheckCircleFill size={25} />
              <div>
                <h3>MySQL</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <GoCheckCircleFill size={25} />
              <div>
                <h3>Python</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <GoCheckCircleFill size={25} />
              <div>
                <h3>Django</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <GoCheckCircleFill size={25} />
              <div>
                <h3>Git</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <GoCheckCircleFill size={25} />
              <div>
                <h3>Java</h3>
                <p>Intermediate</p>
              </div>
            </article>            
          </div>
        </div>
      </div>
    </section>
  );
};

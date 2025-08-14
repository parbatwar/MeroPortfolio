import React, { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";

import styles from "./Contact.module.css"

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};

    // Name validation: only letters & spaces
    if (!/^[A-Za-z\s]+$/.test(formData.name.trim())) {
      tempErrors.name = "Name should only contain letters and spaces.";
    }

    // Email validation: simple regex
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      tempErrors.email = "Please enter a valid email address.";
    }

    // Message validation: minimum length
    if (formData.message.trim().length < 10) {
      tempErrors.message = "Message should be at least 10 characters long.";
    }

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0; // returns true if no errors
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section className={styles.contactContainer} id='contact'>
      <div className={styles.contactHead}>
        <p className={styles.contactP1}>Get In Touch</p>
        <h1 className={styles.contactH1}>Contact Me</h1>
      </div>
      <div className={styles.contactContent}>
        <div className={styles.leftSide}> 
          <a
            href="mailto:parbatwar@gmail.com"
            className={styles.boxOne}
          >
            <MdEmail />
            <h3 className={styles.boxTitle}>Email</h3>
            <p className={styles.boxName}>parbatwar@gmail.com</p>
            <p className={styles.boxMe}> Write me <FaArrowRight /></p>
          </a>

          <a
            href="https://www.linkedin.com/in/parbatwar/"
            className={styles.boxOne}
          >
            <BsLinkedin />
            <h3 className={styles.boxTitle}>LinkedIn</h3>
            <p className={styles.boxName}>linkedin.com/in/parbatwar/</p>
            <p className={styles.boxMe}> Write me <FaArrowRight /></p>
          </a>

          <a
            href="https://github.com/parbatwar"
            className={styles.boxOne}
          >
            <BsGithub />
            <h3 className={styles.boxTitle}>Github</h3>
            <p className={styles.boxName}>github.com/parbatwar</p>
            <p className={styles.boxMe}> Write me <FaArrowRight /></p>
          </a>
        </div>

        <div className={styles.rightSide}>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <small className={styles.error}>{errors.name}</small>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <small className={styles.error}>{errors.email}</small>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <small className={styles.error}>{errors.message}</small>}
            </div>

            <button type="submit" className={styles.sendBtn}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

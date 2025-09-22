import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
        {/* HAS NO LINK - JUST A TITLE TEXT */}
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <h2>valeriapg102@gmail.com</h2>
        </li>
        <li className={styles.link}>
        {/* HAS NO LINK - JUST A TITLE TEXT */}
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon"/>
          <h2>linkin.com/myname</h2>
        </li>
        <li className={styles.link}>
        {/* HAS LINK*/}
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/VLER14">github.com/VLER1A</a>
          
        </li>
      </ul>
    </footer>
  );
};

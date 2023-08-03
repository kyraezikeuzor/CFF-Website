import React from 'react';
import styles from './Subscribe.module.css';
import EmailForm from './EmailForm';

function Subscribe() {
  return (
    <div className={styles["subscribe-container"]}>
        <div className={styles["subscribe-text-container"]}>
            <h1>Stay in the Loop!</h1>
            <p>Don't miss out on the latest updates, exciting announcements, and exclusive offers from Compute the Future Foundation. 
              Join our inner circle and be part of the tech-savvy community shaping the future!</p>
        </div>
        <EmailForm/>
        <img className={styles.doodle} src="/images/arrow-scribble-doodle.png" alt="Arrow doodle"></img>
    </div>
  )
}

export default Subscribe;
import React from 'react';
import styles from './Subscribe.module.css';
import EmailForm from './EmailForm';

function Subscribe() {
  return (
    <div className={styles["subscribe-container"]}>
        <div className={styles["subscribe-text-container"]}>
            <h1>Subscribe to our email list</h1>
            <p>Our Weekly Newsletter is a collection of the latest 
            and greatest from Girls Who Code – top tech stories, 
            real talk from our CEO, and news about young women 
            changing the world.</p>
        </div>
        <EmailForm/>
        <img className={styles.doodle} src="/images/arrow-scribble-doodle.png" alt="Arrow doodle"></img>
    </div>
  )
}

export default Subscribe;
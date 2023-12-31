import React from 'react';
import styles from './Subscribe.module.css';
import EmailForm from '../Global/EmailForm';

function Subscribe() {
  return (
    <div className={styles["subscribe-container"]}>
        <div className={styles["subscribe-text-container"]}>
            <h2>Subscribe for updates</h2>
            <p>Don&apos;t miss out on the latest updates, exciting announcements, and exclusive offers from Compute the Future Foundation.</p>
        </div>
        <EmailForm/>
        <img className={`${styles["side-doodle"]} doodle`} src="/images/arrow-scribble-doodle.png" alt="Arrow doodle"></img>
    </div>
  )
}

export default Subscribe;
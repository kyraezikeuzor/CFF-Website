import React from 'react';
import styles from './Figures.module.css';
import {Button} from './Button'

export default function Figures() {
  return (
    <div className={styles["figure-container"]}>

        <div className={styles["donate-container"]}>
            <h2>We are a non-profit with the mission of connecting the world with free, peer-to-peer tutoring.</h2>
            <Button path="https://www.paypal.com/donate/?hosted_button_id=UP3ZGFTQ7YZ96" buttonStyle="btn--outline">Make a Contribution</Button>
        </div>

        <div className={styles["figures-container"]}>
            <h2>Founded by Houston high school students</h2>
            <p>Our Weekly Newsletter is a collection of the latest and greatest from Girls Who Code 
                – top tech stories, real talk from our CEO, and news about young women changing the world.</p>
            <div className={styles["figures"]}>
            <h3>$1600+ <u>Raised</u></h3>
            <h3>6 Team <u>Members</u></h3>
            <h3>10+ <u>Donors</u></h3>
            </div>
        </div>
    </div>
  )
}

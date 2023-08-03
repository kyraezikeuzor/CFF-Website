import React from 'react';
import styles from './Figures.module.css';
import {Button} from './Button'

export default function Figures() {
  return (
    <div className={styles["figure-container"]}>

        <div className={styles["donate-container"]}>
            <h2>We are a non-profit with the mission of inspiring and empowering students</h2>
            <Button path="https://www.paypal.com/donate/?hosted_button_id=UP3ZGFTQ7YZ96" buttonStyle="btn--outline">Make a Contribution</Button>
        </div>

        <div className={styles["figures-container"]}>
            <h2>Founded by Houston high school students</h2>
            <p>At our organization, we are on a mission to inspire and empower elementary and middle school students to explore the exciting world of computer science and technology. 
              We believe that with the right tools and skills, kids can learn to harness the power of digital technologies to solve problems, express their creativity, and make a positive impact on their communities.</p>
            <div className={styles["figures"]}>
            <h3>$1600+ Raised</h3>
            <h3>6 Team Members</h3>
            <h3>10+ Donors</h3>
            </div>
        </div>
    </div>
  )
}

import React, {useEffect} from 'react';
import styles from './Figures.module.css';
import {Button} from '../Global/Button'

import Aos from "aos";
import "aos/dist/aos.css";

export default function Figures() {
  useEffect(()=>{
    Aos.init({duration:2000});
  }, []);


  return (
    <div data-aos="fade-up" className={styles.figures}>
        <section className={styles["figures-text-container"]}>
          <div className={styles["donate-text-container"]}>
              <h3>We are a non-profit with the mission of inspiring students</h3>
              <Button path="https://www.paypal.com/donate/?hosted_button_id=UP3ZGFTQ7YZ96" buttonStyle='btn--outline' buttonSize="btn--large">Make a Contribution</Button>
          </div>

          <span/>

          <div className={styles["figures-text"]}>
              <h3>Founded by Houston high school students</h3>
              <p>At our organization, we are on a mission to inspire and empower elementary and middle school students to explore the exciting world of computer science and technology. </p>  
          </div>
        </section>

        <div className={styles["figures-container"]}>
          <div className={styles["figure"]}>
            <h3>6</h3>
            <p>Team Members</p>
          </div>
          <div className={styles["figure"]}>
            <h3>$1600+</h3>
            <p>Raised</p>
          </div>
          <div className={styles["figure"]}>
            <h3>10+</h3>
            <p>Donors</p>
          </div>
          <div className={styles["figure"]}>
            <h3>20+</h3>
            <p>Donations</p>
          </div>
        </div>
    </div>
  )
}

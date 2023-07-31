import React from 'react';
import {Card} from './Card';
import styles from './WhatWeDo.module.css';
import {Button} from './Button';

function WhatWeDo() {
  return (
    <div className={styles["whatwedo-container"]}>
        <div className={styles["whatwedo-text-container"]}>
            <h1>Our Learning Opportunities</h1>
            <p>We are a non-profit with the mission of connecting the world with free, peer-to-peer tutoring.</p>
            <Button className={styles['btn']} path='/about'  buttonSize='btn--large'>
                  About Us
            </Button>
        </div>
        <div className={styles["programs-container"]} >
            <Card
            alt="Student"
            src="/images/cff-hero-image-grey.png"
            type="Learn computer science with web development and engineering"
            title="After School Programs" 
            text="Taking the SAT this fall? Learn test-taking strategies, work on practice tests, and receive personalized support through a virtual bootcamp with 5 - 10 fellow students and a certified, trained peer tutor who has already excelled on the SAT. This program is part of a research study on the impact of a no-cost, online SAT tutoring program."
            path="/programs"
            btnText="Learn More"
            />

            <Card
            flexOrder="row-reverse"
            alt="Student"
            src="/images/cff-hero-image-grey.png"
            type="Take part in an enriching summer program"
            title="Summer One-Day Coding Camp" 
            text="Stuck on homework? Get live, one-on-one support from tutors certified to help in math–from Pre-Algebra to Calculus. Available every weekday, 4:00 PM-7:00 PM PST."
            path="/programs"
            btnText="Learn More"
            />

            <Card
            alt="Student"
            src="/images/cff-hero-image-grey.png"
            type="Take part in engaging weekend learning activities"
            title="Virtual Weekend Programs" 
            text="Join other learners like you to prepare for the upcoming SAT®, refresh on math concepts, get ahead for your next school year, and more!"
            path="/programs"
            btnText="Learn More"
            />

        </div>
        <img 
        className={styles["doodle"]} 
        src="/images/plant-leaves-scribble-doodle.png" 
        alt="Plant doodle"></img>
    </div>
  )
}

export default WhatWeDo;

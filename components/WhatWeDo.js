import React from 'react';
import {Card} from './Card';
import styles from './WhatWeDo.module.css';
import {Button} from './Button';

function WhatWeDo() {
  return (
    <div className={styles["whatwedo-container"]}>
        <div className={styles["whatwedo-text-container"]}>
            <h1>Our Learning Opportunities</h1>
            <p>Compute the Future Foundation is a nonprofit organization dedicated to teaching kids computer science and technology. 
              With our comprehensive learning opportunities, we strive to equip young minds with essential skills to thrive in the digital age. 
              Here&apos;s a quick overview of what we offer:</p>
            <Button className={styles['btn']} path='/about'  buttonSize='btn--large'>
                  About Us
            </Button>
        </div>
        <div className={styles["programs-container"]} >
            <Card
            alt="Student"
            src="/images/cff-hero-image-grey.png"
            type="Learn computer science fundamentals."
            title="After School Coding Workshops" 
            text="Our coding workshops provide hands-on experience for kids to learn programming languages like Python, JavaScript, and HTML. Through interactive activities and engaging projects, students develop problem-solving abilities and stimulate their creativity."
            path="/programs"
            btnText="Learn More"
            />

            <Card
            flexOrder="row-reverse"
            alt="Student"
            src="/images/cff-hero-image-grey.png"
            type="Introducing kids to the exciting world of robotics."
            title="Engineering Discoveries" 
            text="Students learn to build and program robots, enabling them to understand the fundamentals of engineering and automation while having fun in the process."
            path="/programs"
            btnText="Learn More"
            />

            <Card
            alt="Student"
            src="/images/cff-hero-image-grey.png"
            type="Delve into the world of website creation. "
            title="Web Development Courses" 
            text="Students learn how to design and build their own websites, gaining practical skills in HTML, CSS, and JavaScript along the way."
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

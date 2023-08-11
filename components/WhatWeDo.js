import React from 'react';
import {Card} from './Card';
import styles from './WhatWeDo.module.css';
import {Button} from './Button';
import Tags from './Tags'

function WhatWeDo() {
  return (
    <div className={styles["whatwedo-container"]}>
        <div className={styles["whatwedo-text-container"]}>
            <h1>Our Learning Opportunities</h1>
            <p>Compute the Future Foundation is a nonprofit organization dedicated to teaching kids computer science and technology. 
              With our comprehensive learning opportunities, we strive to equip young minds with essential skills to thrive in the digital age. 
              Here&apos;s a quick overview of what we offer:</p>
            <Button className={styles['btn']} path='/about' buttonStyle='btn--outline' buttonSize='btn--large'>
                  Learn More About US
            </Button>
        </div>
        <div className={styles["programs-container"]} >
            <Card
            alt="Student"
            src="/images/cff-hero-image-grey.png"
            type="Learn computer science fundamentals"
            title="After School Coding Workshops" 
            text="Our coding workshops provide hands-on experience for kids to learn programming languages like Python, JavaScript, and HTML. Through interactive activities and engaging projects, students develop problem-solving abilities and stimulate their creativity."
            tags="Web Development, Programming, Code.org"
            path="/programs"
            btnText="Learn More"
            />

            <Card
            flexOrder="row-reverse"
            alt="Student"
            src="/images/cff-hero-image-grey.png"
            type="Teaching the exciting world of robotics"
            title="Engineering Discoveries" 
            text="Students learn to build and program robots, enabling them to understand the fundamentals of engineering and automation while having fun in the process."
            tags="Engineering, Robotics, RaspberryPi"
            path="/programs"
            btnText="Learn More"
            />

            <Card
            alt="Student"
            src="/images/cff-hero-image-grey.png"
            type="Jump into the exciting world of website creation"
            title="Web Development Courses" 
            text="Students learn how to design and build their own websites, gaining practical skills in HTML, CSS, and JavaScript along the way."
            tags="HTML, CSS, JavaScript"
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

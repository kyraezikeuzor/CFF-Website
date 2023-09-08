import React from 'react';
import {Card} from '../Global/Card';
import styles from './WhatWeDo.module.css';
import {Button} from '../Global/Button';
import Section from '../Global/Section';

function WhatWeDo() {
  return (
    <div className={styles["whatwedo-container"]}>
        <div className={styles["whatwedo-text-container"]}>
            <h2>What We Do</h2>
            <p>With our comprehensive learning opportunities, we strive to equip young minds with essential skills to thrive in the digital age. 
              Here&apos;s a quick overview of what we offer:</p>
            
        </div>
        <div className={styles["programs-container"]} >
          {/*<Section
            alt="Student"
            src="/images/cff-hero-image-grey.png"
            type="After School Coding Workshops"
            title="Learn computer science" 
            text="Our coding workshops provide hands-on experience for kids to learn programming languages like Python, JavaScript, and HTML. Through interactive activities and engaging projects, students develop problem-solving abilities and stimulate their creativity."
            tags="Web Development, Code.org"
            path="/our-programs"
            btnText="Learn More"
            />*/}
            <Section
            alt="Student"
            src="/images/cff-hero-image-grey.png"
            type="Design and code websites"
            title="Web Development" 
            text="Students learn how to design and build their own websites, gaining practical skills in HTML, CSS, and JavaScript."
            tags="HTML, CSS, JavaScript"
            path="/our-programs"
            btnText="Learn More"
            />
            <Section
            flexOrder="row-reverse"
            alt="Student"
            src="/images/cff-hero-image-grey.png"
            type="Build robots"
            title="Engineering Discoveries" 
            text="Students learn to build and program robots, enabling them to understand the fundamentals of engineering and automation while having fun in the process."
            tags="Arduino, RaspberryPi, Makerbots"
            path="/our-programs"
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

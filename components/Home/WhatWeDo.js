import React, {useEffect} from 'react';
import {Card} from '../Global/Card';
import styles from './WhatWeDo.module.css';
import {Button} from '../Global/Button';
import Section from '../Global/Section';

import Aos from "aos";
import "aos/dist/aos.css";

function WhatWeDo() {
  useEffect(()=>{
    Aos.init({duration: 500});
  }, []);


  return (
    <div className={styles["whatwedo-container"]}>
        <div className="text-container">
            <h1>What We Do</h1>
            <p>With our comprehensive learning opportunities, we strive to equip young minds with essential skills to thrive in the digital age. 
              Here&apos;s a quick overview of what we offer:</p>
        </div>
        <div data-aos="fade-up" className={styles["programs-container"]} >
            <Section
            showBtn={false}
            alt="Student"
            src="/images/cff-hero-image-grey.png"
            type="Design and code websites"
            title="Web Development" 
            text="Students learn how to design and build their own websites, gaining practical skills in HTML, CSS, and JavaScript."
            tags="HTML, CSS, JavaScript"
            />
            <Section
            showBtn={false}
            flexOrder="row-reverse"
            alt="Student"
            src="/images/cff-hero-image-grey.png"
            type="Build robots"
            title="Engineering Discoveries" 
            text="Students learn to build and program robots, enabling them to understand the fundamentals of engineering and automation while having fun in the process."
            tags="Arduino, RaspberryPi, Makerbots"
            />
        </div>
        
    </div>
  )
}

export default WhatWeDo;

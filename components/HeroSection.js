import React from 'react';
import {Button} from './Button';
import styles from './HeroSection.module.css';

function HeroSection() {
  return (
    <div className={styles['hero-container']}>
      
        <div className={styles["hero-div"]}>
            <h1>Teaching and empowering young coders</h1>
            <p>Compute the Future Foundation strives to educate young students in computer science and technology.</p>
            
            <div className={styles['hero-btns']}>
              <Button className={styles['btn']} path='/about-us' buttonStyle='btn--outline' buttonSize='btn--large'>
                  Learn More
              </Button>
              <Button className={styles['btn']} path='/our-programs' buttonStyle='btn--primary' buttonSize='btn--large'>
                  Start Learning
              </Button>
            </div>
        </div>
        
        <img src="/images/cff-collage.png" className={styles["hero-img"]} alt="Collage of students and art"/>
        
    </div>
  )
}

export default HeroSection;
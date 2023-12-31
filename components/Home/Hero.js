import React, {useEffect} from 'react';
import {Button} from '../Global/Button';
import styles from './Hero.module.css';

import Aos from "aos";
import "aos/dist/aos.css";


function HeroSection() {
  useEffect(()=>{
    Aos.init({duration: 500});
  }, []);

  return (
    <div className={styles.hero}>
        <div className={styles["hero-div"]}>
        
            <h1>Teaching and empowering young learners</h1>
          
            <p>Educating young learners in computer science and technology. Impacting the youth in our local communities by giving them the tools to expand their aspirations.</p>
            
            <div data-aos="fade-up" className={styles['hero-btns']}>
              <Button className={styles['btn']} path='/who-we-are' buttonStyle='btn--outline' buttonSize='btn--large'>
                  Learn More
              </Button>
              <Button className={styles['btn']} path='/our-programs' buttonSize='btn--large'>
                  Start Learning
              </Button>
            </div>
        </div>
        <img src="/images/cff-collage.png" className={styles["hero-img"]} alt="Collage of students and art"/>
    </div>
  )
}

export default HeroSection;
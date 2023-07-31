import React from 'react';
import Card from '../../components/Card';
import programData from '../../data/programs.json';
import Banner from '../../components/Banner';
import FadeInSection from '../../components/FadeInSection';
import styles from './styles.module.css';

function Programs() {
  return (
    <div className={styles["our-programs"]}>
      <FadeInSection>
        <div className={styles["programs-text-container"]}>
          <h1>Our Programs</h1>
        
          <p className={styles["caption"]}>Now, Schoolhouse.world reaches learners from over 100+ countries, 
          and is proud to foster a vibrant community of over 5750+ volunteer tutors and 42500+ learners. 
          We’re driven by our mission to connect hundreds of thousands of more learners with safe, 
          equitable opportunities to learn, teach, and grow.</p>
        </div>

      <div className={styles["programs-container"]}>
        {programData.map((item, index) => ( 
        <Card
          key={index}
          src={item.src}
          alt={item.alt}
          title={item.name}
          
          btnText="Register"
        /> ))}
      </div>

      <Banner text="Welcome to Compute the Future Foundation, 
            a 501(c)(3) non-profit organization, dedicated to 
            promoting computer science education."/>
      </FadeInSection>
    </div>
  )
}

export default Programs;
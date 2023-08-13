import React from 'react';
import Card from '../../components/Global/Card';
import programData from '../../content/programs.json';
import Banner from '../../components/Global/Banner';
import FadeInSection from '../../components/Global/FadeInSection';
import styles from './styles.module.css';

function Programs() {
  return (
    <main className={styles.main}>
      <FadeInSection>
        <header>
          <h2>Our Programs</h2>
          <p className={styles["caption"]}>Our programs offer an enriching and immersive experience that equips young minds with the knowledge and skills to thrive in the digital world.</p>
        </header>

      <div className={styles["programs-container"]}>
        {programData.map((item, index) => ( 
        <Card
          key={index}
          src={item.src}
          alt={item.alt}
          type={item.name}
          tags={item.tags}
          btnText="Sign Up"
        /> ))}
      </div>

      
      </FadeInSection>
    </main>
  )
}

export default Programs;
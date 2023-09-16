import React from 'react';
import Card from '../../components/Global/Card';
import programData from '../../content/programs.json';
import Banner from '../../components/Global/Banner';
import styles from './styles.module.css';

function Programs() {
  return (
    <main className="main">
        <div className="text-container">
          <h1>Programs</h1>
          <p>Our programs offer an enriching and immersive experience that equips young minds with the knowledge and skills to thrive in the digital world.</p>
        </div>

      <div className={styles["programs-container"]}>
        {programData.map((item, index) => ( 
        <Card
          key={index}
          src={item.src}
          alt={item.alt}
          title={item.name}
          text={item.description}
          tags={item.tags}
          btnText="Sign Up"
        /> ))}
      </div>
    </main>
  )
}

export default Programs;
import React from 'react';
import Card from '../../components/Card';
import programData from '../../content/programs.json';
import Banner from '../../components/Banner';
import FadeInSection from '../../components/FadeInSection';
import styles from './styles.module.css';

function Programs() {
  return (
    <div className={styles["our-programs"]}>
      <FadeInSection>
        <div className={styles["philosophy"]}>
          <h1>Our Educational Philosophy</h1>
          <p>Our educational philosophy centers around three core values, represented by the acronym <b>FIT: Fun, Inspire, and Teach</b>. 
            These values serve as the foundation for the organization &apos;s approach to teaching computer science and technology to kids, with a strong emphasis on creating a positive, engaging, and empowering learning environment.</p>
          
          <div className={styles["philosophy-content"]}>

          
            <section>
            <h3>Fun</h3>
            <p>Our educational philosophy of fun is to ensure that every student enjoys their time and has fun.</p>
            </section>
            
            <section>
            <h3>Inspire</h3>
            <p>Our educational philosophy of inspire is to inspire the new generation into computer science.</p>
            </section>

            <section>
            <h3>Teach</h3>
            <p>Our educational philosophy of teaching is to teach and educate the next generation of coders.</p>
            </section>

          </div>
        
        </div>


        <div className={styles["programs-text-container"]}>
          <h2>Our Programs</h2>
        
          <p className={styles["caption"]}>Our programs offer an enriching and immersive experience that equips young minds with the knowledge and skills to thrive in the digital world.</p>
        </div>

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
    </div>
  )
}

export default Programs;
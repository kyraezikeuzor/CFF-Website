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
            These values serve as the foundation for the organization's approach to teaching computer science and technology to kids, with a strong emphasis on creating a positive, engaging, and empowering learning environment.</p>
          
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
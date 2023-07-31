import React from 'react';
import Team from '../../components/Team';
import Banner from '../../components/Banner'
import styles from './styles.module.css';
import teamData from '../../data/team.json';
import Card from '../../components/Card'

function About() {
  return (
    <div className={styles["about-us"]}>
        <div className={styles["about-text-container"]}>
          <h1>Our Team</h1>
          <p className={styles["caption"]}>As a Schoolhouse tutor, you can give back to other learners who need it the most, 
            while gaining leadership experience and volunteer hours. We welcome students to 
            become tutors–no prior experience is required!</p>
        </div>

        <div  className={styles["team-container"]}>
            {teamData.map((item, index) => (
            <Card 
            key={index}
            src={'/images/profile-standin.jpg'}
            alt={item.name}
            title={item.name}
            type={item.role}
            text={item.about}
            />
            ))}
        </div>

        <Banner text="Welcome to Compute the Future Foundation, 
            a 501(c)(3) non-profit organization, dedicated to 
            promoting computer science education."/>
    </div>
  )
}

export default About;

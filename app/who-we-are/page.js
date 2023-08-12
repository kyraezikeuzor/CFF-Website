import React from 'react';
import Banner from '../../components/Banner'
import styles from './styles.module.css';
import teamData from '../../content/team.json';
import Card from '../../components/Card'

function About() {
  return (
    <div className={styles["about-us"]}>
        <header>
          <h1>Our Team</h1>
          <p className={styles["caption"]}>Welcome to the page where we introduce you to the amazing individuals who make up our team at Compute the Future Foundation. 
          We are a group of dedicated individuals with a shared mission: to inspire and empower young minds through computer science and technology.</p>
          </header>

        <div  className={styles["team-container"]}>
            {teamData.map((item, index) => (
            <Card 
            key={index}
            src={item.src}
            alt={item.name}
            title={item.name}
            type={item.role}
            text={item.about}
            tags={item.tags}
            />
            ))}
        </div>

    </div>
  )
}

export default About;

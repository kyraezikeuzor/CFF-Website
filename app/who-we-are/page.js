import React from 'react';
import Banner from '../../components/Global/Banner'
import styles from './styles.module.css';
import teamData from '../../content/team.json';
import Card from '../../components/Global/Card'

function About() {
  return (
    <div className={styles.main}>
        <header>
          <h1>Our Team</h1>
          <p>Welcome to the page where we introduce you to the amazing individuals who make up our team at Compute the Future Foundation. 
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

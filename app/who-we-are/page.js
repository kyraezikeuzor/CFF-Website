import React from 'react';
import Banner from '../../components/Global/Banner'
import styles from './styles.module.css';
import teamData from '../../content/team.json';
import Card from '../../components/Global/Card'
import Section from '../../components/Global/Section'

function About() {
  return (
    <div className="main">
        <div className="text-container">
          <h1>Our Team</h1>
          <p>Welcome to the page where we introduce you to the amazing individuals who make up our team at Compute the Future Foundation. 
          We are a group of dedicated individuals with a shared mission: to inspire and empower young minds through computer science and technology.</p>
        </div>

        <div className={styles["team-container"]}>
            {teamData.map((item, index) => (
            <Section 
            key={index}
            src={item.src}
            alt={item.name}
            title={item.name}
            type={item.role}
            text={item.about}
            imageSize='medium'
            tags={item.tags}
            />
            ))}
        </div>

    </div>
  )
}

export default About;

import React from 'react';
import styles from './Founders.module.css';
import {Card} from './Card';
import {Button} from './Button';
import teamData from '../data/team.json';

function Founders() {
  let foundersList = teamData.map((item, index) => {
    if (item.role == "Founder & President") {
      return <Card 
      key={index}
      src={'/images/profile-standin.jpg'}
      alt={item.name}
      title={item.name}
      />
    }
  })

  return (
    <div className={styles["founders-container"]}>
        <h1>Our Founders</h1>
        <p>Our Weekly Newsletter is a collection of the latest 
            and greatest from Girls Who Code top tech stories, 
            real talk from our CEO, and news about young women 
            changing the world.</p>

      <div className={styles["founders-content-container"]}>
        
        {foundersList}
        
      </div>
      <Button path="/about-us">Meet Our Team</Button>

      <img src="/images/regular-arrow-scribble-doodle.png" alt="Arrow" className={`${styles["top-doodle"]} "doodle"`}></img>
      <img src="/images/arrow-scribble-doodle.png" alt="Arrow doodle"className={`${styles["bottom-doodle"]} "doodle"`}></img>
      
  </div>
  )
}

export default Founders;
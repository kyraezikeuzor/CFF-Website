import React from 'react';
import styles from './Founders.module.css';
import {Card} from './Card';
import {Button} from './Button';
import teamData from '../content/team.json';

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
        <p>Our founders power Compute the Future Foundation. 
          They create our curriculum and partner with like-minded organizations to keep our programs cutting-edge. 
          Their dedication shows our commitment to excellence.</p>

      <div className={styles["founders-content-container"]}>
        
        {foundersList}
        
      </div>
      <Button path="/who-we-are">Meet Our Team</Button>

      <img src="/images/regular-arrow-scribble-doodle.png" alt="Arrow" className={`${styles["top-doodle"]} "doodle"`}></img>
      <img src="/images/arrow-scribble-doodle.png" alt="Arrow doodle"className={`${styles["bottom-doodle"]} "doodle"`}></img>
      
  </div>
  )
}

export default Founders;
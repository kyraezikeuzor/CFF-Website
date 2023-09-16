import React from 'react';
import styles from './Founders.module.css';
import Section from '../Global/Section';
import {Button} from '../Global/Button';
import teamData from '../../content/team.json';

function Founders() {
  let foundersList = teamData.map((item, index) => {
    if (item.role == "Founder & President") {
      return <img 
      key={index}
      src={item.src}
      alt={item.name}
      />
    }
  })

  return (
    <div className={styles["founders"]}>
        <div className="text-container">
          <h1>Our Founders</h1>
          <p>Our founders power Compute the Future Foundation. 
            They create our curriculum and partner with like-minded organizations to keep our programs cutting-edge.</p>
            <Button path="/who-we-are" buttonSize='btn--large'>Meet Our Team</Button>
        </div>
      
        <div className={styles["founders-container"]}>
        { foundersList}
        </div>
  
      <img src="/images/arrow-scribble-doodle.png" alt="Arrow doodle"className={`${styles["bottom-doodle"]} doodle`}></img>
    </div>
  )
}

export default Founders;
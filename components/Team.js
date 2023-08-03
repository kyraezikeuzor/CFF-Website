import React from 'react';
import styles from './Team.module.css';
import Card from './Card';
import teamData from '../content/team.json';

function Team() {

  return (
    <div className={styles["team-container"]}>
      {teamData.map((item, index) => (
        <Card 
        key={index}
        src={item.src}
        alt={item.name}
        title={item.name}
        type={item.role}
        text={item.about}
      />
      ))}
    </div>
  )
}

export default Team;
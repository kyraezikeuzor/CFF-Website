import React from 'react';
import styles from './Team.module.css';
import Card from './Card';
import teamData from '../data/team.json';

function Team() {

  return (
    <div className={styles["team-container"]}>
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
  )
}

export default Team;
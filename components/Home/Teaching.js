import React from 'react';
import subjectData from '../../content/subjects.json'
import styles from './Teaching.module.css';
import Tags from '../Global/Tags'
import Card from '../Global/Card'

export default function Teaching() {
  return (
    <div className={styles["subjects-container"]}>
        <div className="text-container">
            <h1>Teaching</h1>
            <p>Our courses include engaging lessons and activities that culminate in project showcases and coding competitions called Hackathons where your child will collaborate, share ideas, and compete for fun prizes. </p>
            
        </div>
        <div className={styles["subjects"]}>
            {subjectData.map((item, index) => (
                <Card
                key={index}
                title={item.name}
                text={item.text}
                tags={item.tag}
                btnText="Read more"
                src={item.src}
                />
            ))}
        </div>  
    </div>
  )
}

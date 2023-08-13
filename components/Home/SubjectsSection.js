import React from 'react';
import subjectData from '../../content/subjects.json'
import styles from './SubjectsSection.module.css';
import Tags from '../Global/Tags'

export default function SubjectsSection() {
  return (
    <div className={styles["subjects-container"]}>
        <h2>Learn computer programming, engineering, and more</h2>
        
        <p>Our courses include engaging lessons and activities that culminate in project showcases and coding competitions called Hackathons where your child will collaborate, share ideas, and compete for fun prizes. </p>
        
        <div className={styles["subjects"]}>
            {subjectData.map((item, index) => (
                <div key={index} className={styles.subject}>
                    <h4>{item.name}</h4>
                    <Tags>
                        {item.lessons}
                    </Tags>
                </div>
            ))}
        </div>  
    </div>
  )
}

import React from 'react';
import subjectData from '../content/subjects.json'
import styles from './SubjectsSection.module.css';




export default function SubjectsSection() {



  return (
    <div className={styles["subjects-container"]}>
        <h2>Learn computer programming, engineering, and more</h2>
        <div className={styles["subject-boxes"]}>
            {subjectData.map((item, index) => (
                <div key={index} className={styles.subject}>
                    <h5 className={styles["subject-item"]}> {item.name}</h5>
                    {item.lessons.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </div>
            ))}
        </div>
        
    </div>
  )
}

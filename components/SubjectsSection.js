import React from 'react';
import subjectData from '../content/subjects.json'
import styles from './SubjectsSection.module.css';
import Tags from './Tags'

export default function SubjectsSection() {
  return (
    <div className={styles["subjects-container"]}>
        <h2>Learn computer programming, engineering, and more</h2>
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

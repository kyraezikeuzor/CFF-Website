import React, {useEffect} from 'react';
import subjectData from '../../content/subjects.json'
import styles from './Teaching.module.css';
import Card from '../Global/Card'

import Aos from "aos";
import "aos/dist/aos.css";

export default function Teaching() {

  useEffect(()=>{
    Aos.init({duration: 500});
  }, []);

  return (
    <div  className={styles["subjects-container"]}>
        <div className="text-container">
            <h1>Teaching</h1>
            <p>Our courses include engaging lessons and activities that culminate in project showcases and coding competitions called Hackathons where your child will collaborate, share ideas, and compete for fun prizes. </p>
            
        </div>
        <div data-aos="fade-up" className={styles["subjects"]}>
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

import React, {useState} from 'react'
import styles from './FAQ.module.css'
import faq from '../../content/faq.json'
import Accordion from './Accordion'


export default function FAQ() {

  return (
    <section className={styles.section}>
        <h1 className="text-container">FAQ</h1>

        <div className={styles.faqs}>
          {faq.map((item,index)=>(
          <Accordion 
          key={index} 
          title={item.q} 
          content={item.a}/>
          
          ))}
        </div>
        
    </section>
  )
}
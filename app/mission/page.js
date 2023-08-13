import React from 'react'
import styles from './page.module.css'

export default function Mission() {
  return (
    <main className={styles.main}> 
      <header>
        <div className={styles["header-text"]}>
          <h1>Our educational principles are three-fold</h1>
          <p>Our educational philosophy centers around three core values, represented by the acronym <b>FIT: Fun, Inspire, and Teach</b>. 
            These values serve as the foundation for the organization &apos;s approach to teaching computer science and technology to kids, with a strong emphasis on creating a positive, engaging, and empowering learning environment.</p>
        </div>
        <img src="/images/cff-hero-image-grey.png"></img>
      </header>

      <span/>

      <div className={styles["mission-content"]}>
        <section>
          <h3>Fun</h3>
          <p>Our educational philosophy of fun is to ensure that every student enjoys their time and has fun.</p>
        </section>
        
        <section>
          <h3>Inspire</h3>
          <p>Our educational philosophy of inspire is to inspire the new generation into computer science.</p>
        </section>

        <section>
          <h3>Teach</h3>
          <p>Our educational philosophy of teaching is to teach and educate the next generation of coders.</p>
        </section>
      </div>
    </main>
  )
}

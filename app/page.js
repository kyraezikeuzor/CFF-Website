'use client'
import React, {useEffect} from 'react';
import HeroSection from '../components/Home/Hero';
import WhatWeDo from '../components/Home/WhatWeDo';
import Founders from '../components/Home/Founders'
import Figures from '../components/Home/Figures';
import Teaching from '../components/Home/Teaching';
import FAQ from '../components/Global/FAQ'
import styles from './page.module.css'

import Aos from "aos";
import "aos/dist/aos.css";


export default function Home() {

  return (

    <main className={styles.main}>
      
        <HeroSection />
        
        <Figures/>
        
      
        <WhatWeDo/>

        <Teaching />

        <Founders/> 
        
        <FAQ/>
        
    </main>
  )
}

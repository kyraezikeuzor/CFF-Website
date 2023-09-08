'use client'
import React from 'react';
import HeroSection from '../components/Home/Hero';
import Banner from '../components/Global/Banner';
import Subscribe from '../components/Home/Subscribe';
import WhatWeDo from '../components/Home/WhatWeDo';
import Founders from '../components/Home/Founders'
import Figures from '../components/Home/Figures';
import Teaching from '../components/Home/Teaching';
import FAQ from '../components/Global/FAQ'


export default function Home() {

  return (
    <main className="home">
      
        <HeroSection/>
        
        <Figures/>
        
      
        <WhatWeDo/>

        <Teaching/>

        <Founders/> 
        
        <FAQ/>
        
    </main>
  )
}

'use client'
import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import Banner from '../components/Global/Banner';
import Subscribe from '../components/Home/Subscribe';
import WhatWeDo from '../components/Home/WhatWeDo';
import Founders from '../components/Home/Founders'
import Figures from '../components/Home/Figures';
import FadeInSection from '../components/Global/FadeInSection';
import SubjectsSection from '../components/Home/SubjectsSection';


export default function Home() {

  return (
    <main className="home">
      <FadeInSection>
        <HeroSection/>
        
        <Figures/>
        <Banner text="Welcome to Compute the Future Foundation, 
        a 501(c)(3) non-profit organization, dedicated to 
        promoting computer science education."/>
      
        <WhatWeDo/>
        <Founders/> 
        
        <Subscribe/>
        
      </FadeInSection>
    </main>
  )
}

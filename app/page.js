'use client'
import React from 'react';
import HeroSection from '../components/HeroSection';
import Banner from '../components/Banner';
import Subscribe from '../components/Subscribe';
import WhatWeDo from '../components/WhatWeDo';
import Founders from '../components/Founders'
import Figures from '../components/Figures';
import FadeInSection from '../components/FadeInSection';
import SubjectsSection from '../components/SubjectsSection';


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
        <SubjectsSection/>
        <Subscribe/>
        
      </FadeInSection>
    </main>
  )
}

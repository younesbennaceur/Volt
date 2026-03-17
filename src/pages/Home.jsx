// pages/Home.jsx
import React from 'react'

import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import HowItWorks from '../components/HowItWorks.jsx';
import Testimonials from '../components/Avis.jsx';
import AppGallery from '../components/AppGale.jsx';
import FAQ from '../components/Faqs.jsx';
import PartnerSection from '../components/Partners.jsx';
import CTASection from '../components/Cta.jsx';
import Features from '../components/Features.jsx';
import Services from '../components/Services.jsx';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HowItWorks />
        <Features />
        <Services />
     
      <AppGallery />
      
      <PartnerSection />
      <FAQ />
       <Testimonials />
      <CTASection />



    
      <Footer />
      
       

    </div>
  )
}
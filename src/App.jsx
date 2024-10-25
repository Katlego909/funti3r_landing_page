import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import DriveSuccess from './components/DriveSuccess'
import TheBenefits from './components/TheBenefits'
import WhyChooseUs from './components/WhyChooseUs'
import TheDifference from './components/TheDifference'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {


  return (
    <>
    <NavBar />
    <Hero />
    <TrustedBy />
    <DriveSuccess />
    <TheBenefits />
    <WhyChooseUs />
    <TheDifference />
    <CTA />
    <Footer />

    </>
  )
}

export default App

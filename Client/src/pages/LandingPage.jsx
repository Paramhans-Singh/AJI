import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'
import WhatIsDCM from '../components/WhatIsDCM'

const LandingPage = () => {
  return (
    <>
        <Navbar />
        <Hero/>
        <AboutUs/>
        <WhatIsDCM/>
        <Footer/>

    </>
  )
}

export default LandingPage

import React from 'react'
import '../styles/Hero.css'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-title">
          <h1 className="hero-title-text">
            <strong>AJI: </strong>Streamlining Courts for Brighter India
          </h1>
        </div>
        <div className="hero-text">
          "Accelerated Justice: Transforming India's Legal System with
          Innovation and Efficiency – Your Access to Swift, Fair, and
          Transparent Justice."
        </div>
        <button className="hero-button">Get in touch</button>
      </div>
      <div className="hero-image">
        <img src="https://media.istockphoto.com/id/1339076671/vector/scales-of-justice-hand-drawn-art-vector-graphic.jpg?s=612x612&w=0&k=20&c=ugmGlISCfRSKLVrmCTNA1HGjkpG1aYGtLBXsmVs3xx8=" />
      </div>
    </div>
  );
}

export default Hero
import React from 'react'
import '../styles/Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-container'>
            <div className='hero-title'>
                <h1 className='hero-title-text'><strong>CaseIQ: </strong>Priortizing Fairness</h1>
            </div>
            <div className='hero-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quo voluptatibus itaque, qui iusto eos totam sit voluptate. Neque, dignissimos ducimus. Rerum eaque veritatis quas earum sit. Id, doloribus hic?
            </div>
            <button className='hero-button'>Get in touch</button>
        </div>
        <div className='hero-image'>
            <img src='https://media.istockphoto.com/id/1339076671/vector/scales-of-justice-hand-drawn-art-vector-graphic.jpg?s=612x612&w=0&k=20&c=ugmGlISCfRSKLVrmCTNA1HGjkpG1aYGtLBXsmVs3xx8='/>
        </div>
    </div>
  )
}

export default Hero
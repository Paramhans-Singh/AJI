import React from 'react'
import '../styles/AboutUs.css'

const AboutUs = () => {
  return (
    <div className="AboutUs">
      <div className="AboutUs-container">
        <div className="AboutUs-title">
          <h1 className="AboutUs-title-text">
            <strong>About Us</strong>
          </h1>
        </div>
        <div className="AboutUs-text">
          Accelerated Justice: Streamlining Courts for a Brighter India" is a
          transformative project dedicated to revolutionizing the Indian legal
          landscape. With a firm commitment to expediting court cases and
          enhancing access to justice, this initiative harnesses cutting-edge
          technology and innovative strategies. By digitizing case management,
          embracing modern solutions, and promoting transparency, we aspire to
          eliminate the backlog of cases, reduce delays, and empower all
          citizens with a faster, fairer, and more efficient legal system. Our
          vision is to usher in an era where justice is not just a right but a
          reality for every Indian, ensuring that the law serves as a beacon of
          hope and equity for all. Together, we aim to shape a brighter future
          for India, one where justice is swift, accessible, and truly
          transformative. In India, the legal system has traditionally grappled
          with issues of inefficiency, backlog of cases, and delayed justice.
          This was largely attributed to the paper-based nature of case
          management.
        </div>
      </div>
      <div className="AboutUs-image">
        <img src="https://media.istockphoto.com/id/1339076671/vector/scales-of-justice-hand-drawn-art-vector-graphic.jpg?s=612x612&w=0&k=20&c=ugmGlISCfRSKLVrmCTNA1HGjkpG1aYGtLBXsmVs3xx8=" />
      </div>
    </div>
  );
}

export default AboutUs
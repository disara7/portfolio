import React from 'react'
import CV from '../../assets/cv.pdf'

const cv = () => {
  return (
    <div className="cv">
        <a href={CV} download>Download CV</a>
        <a href="#contact">Contact Me</a>
    </div>
  )
}

export default cv
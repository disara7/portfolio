import React from 'react'
import CV from '../../assets/Disara_Mapalagama_CV.pdf'

const cv = () => {
  return (
    <div className="cv">
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default cv
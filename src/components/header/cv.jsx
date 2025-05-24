import React from 'react'
import CV from '../../assets/Disara_Mapalagama_CV.pdf'
import { FiDownload, FiMail } from 'react-icons/fi'
import './cv.css'

const Cv = () => {
  return (
    <div className="cv">
      {/* Full buttons for larger screens */}
      <a href={CV} download className='btn btn_full'>Download CV</a>
      <a href="#contact" className='btn btn-primary btn_full'>Contact Me</a>

      {/* Icons only for small screens */}
      <a href={CV} download className='btn_icon'>
        <FiDownload size={24} />
      </a>
      <a href="#contact" className='btn-icon'>
        <FiMail size={24} />
      </a>
    </div>
  )
}

export default Cv

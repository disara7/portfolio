import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaDribbble } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

const Socials = () => {
  return (
    <div className='social_links'>
        <a href="https://www.linkedin.com/in/disaradm/" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/disara7" target='_blank'><BsGithub /></a>
        <a href="https://dribbble.com/disara7" target='_blank'><FaDribbble /></a>
        <a href="https://medium.com/@disaradm07" target='_blank'><FaMedium /></a>
    </div>
  )
}

export default Socials
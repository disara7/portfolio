import React from 'react'
import './header.css'
import CV from './cv'
import ME from '../../assets/disara.png'
import Socials from './Socials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>DISARA</h1>
        <h5>Full Stack Developer</h5>
        <h5 className="text-light">I'm a multidesciplinary Software Engineering Undergraduate</h5>
        <CV />
        <Socials />

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
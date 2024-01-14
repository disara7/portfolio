import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>DISARA</h1>
        <h5>Full Stack Developer</h5>
        <h5 className="text-light">I'm a multidesciplinary Software Engineering Undergraduate</h5>
      </div>
    </header>
  )
}

export default Header
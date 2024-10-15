import React, { useState, useEffect } from 'react';
import './header.css';
import './hname.css';
import './responsive.css';
import CV from './cv';
import ME from '../../assets/disara.png';   // Default image for large screens
import DISARA_SMALL from '../../assets/disara.png'; // Image for small devices
import Socials from './Socials';

const Header = () => {
  
  return (
    <header>
      <div className="container header__container">
        <h1 className="fname">DISARA</h1>
        <h5 className='name__post'>Full Stack Developer</h5>
        <h5 className="name__description">
          I am a multidisciplinary software engineering undergraduate with a creative problem-solving approach and an artistic mindset.
        </h5>
        
        <CV />
        <Socials />

        <div className="me">
          <img src={ME} alt="Disara" />
        </div>
      </div>
    </header>
  );
};

export default Header;

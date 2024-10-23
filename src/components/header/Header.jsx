import React, { useState, useEffect } from 'react';
import './header.css';
import './hname.css';
import './responsive.css';
import CV from './cv';
import ME from '../../assets/disara.png';   // Default image for large screens
import Socials from './Socials';

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scale = Math.max(1 - scrollY / 300, 0.5); // Adjust scale and limits
  const translateX = Math.min(scrollY / 2, 0);    // Move left (stays at 0)
  const translateY = Math.min(scrollY / 2, 0);    // Move up (stays at 0)

  return (
    <header>
      <div className="container header__container">
      <div className="me">
          <img src={ME} alt="Disara" />
        </div>
        <h1
          className="fname"
          
        >
          DISARA
        </h1>
        <h5 className="name__post">Full Stack Developer</h5>
        <h5 className="name__description">
          I am a multidisciplinary software engineering undergraduate with a creative problem-solving approach and an artistic mindset.
        </h5>
        
        <CV />
        <Socials />

        
      </div>
    </header>
  );
};

export default Header;

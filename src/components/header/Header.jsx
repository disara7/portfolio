import React, { useState, useEffect } from 'react';
import './header.css';
import './hname.css';
import './cv.css';
import './scroll.css';
import './responsive.css';
import CV from './cv';
import ME from '../../assets/disara.png';   
import Socials from './Socials';
import { FaAnglesDown } from "react-icons/fa6";

const Header = () => {
  const [color, setColor] = useState('rgb(255, 255, 255)');
  const [currentText, setCurrentText] = useState('');
  const texts = ['_Software', '_UI/UX', '_Front-End'];
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const maxScroll = 300;
    const colorValue = Math.min(200, (scrollPosition / maxScroll) * 200);
    const newColor = `rgb(${255 - colorValue}, ${255 - colorValue}, ${255 - colorValue})`;
    setColor(newColor);
  };

  useEffect(() => {
    const typeEffect = () => {
      if (!isDeleting) {
        if (charIndex < texts[textIndex].length) {
          setCurrentText((prev) => prev + texts[textIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          setIsDeleting(true); // Start deleting after typing is done
        }
      } else {
        if (charIndex > 0) {
          setCurrentText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false); // Start typing the next text
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    const interval = setInterval(typeEffect, isDeleting ? 100 : 150); // Adjust speeds for typing and deleting

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [charIndex, textIndex, isDeleting]);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about'); // Ensure this ID matches your next section
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <div className="container header__container">
        <div className="me">
          <img src={ME} alt="Disara" />
        </div>
        <h1
          className="fname"
          style={{ color, transition: 'color 0.2s ease' }}
        >
          DISARA
        </h1>
        <div className="name__post">
          <h5 className='creative'>Creatively </h5>
          <h5 className='eng'>engineering </h5>
          <h5 className='product'>{currentText}</h5> {/* Display the current text */}
        </div>
        <h5 className="name__description"></h5>
        
        <CV />
        <Socials />
        
        <button 
          className="scroll-down-button" 
          onClick={scrollToNextSection}
        >
          <FaAnglesDown style={{ fontSize: '1.5rem' }} />
        </button>
      </div>
    </header>
  );
};

export default Header;

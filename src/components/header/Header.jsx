import React, { useState, useEffect } from 'react';
import './header.css';
import CV from './cv';
import ME from '../../assets/disara.png';   // Default image for large screens
import DISARA_SMALL from '../../assets/disara.png'; // Image for small devices
import Socials from './Socials';

const Header = () => {
  const [imageSrc, setImageSrc] = useState(ME);

  // Function to handle window resize and update image based on screen width
  const handleResize = () => {
    if (window.innerWidth <= 600) {
      setImageSrc(DISARA_SMALL);  // Use disara-small.png for small screens
    } else {
      setImageSrc(ME);  // Use disara.png for larger screens
    }
  };

  // Set up event listener for window resizing
  useEffect(() => {
    // Check the screen size on component mount
    handleResize();

    // Listen to window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header>
      <div className="container header__container">
        <h1 className='fname'>DISARA</h1>
        <h5 className='name__post'>Full Stack Developer</h5>
        <h5 className="name__description">
          I am a multidisciplinary software engineering undergraduate with a creative problem-solving approach and an artistic mindset.
        </h5>
        <CV />
        <Socials />

        <div className="me">
          <img src={imageSrc} alt="Disara" />
        </div>
      </div>
    </header>
  );
};

export default Header;

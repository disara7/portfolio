import React, { useState, useEffect } from 'react';
import './header.css';
import './scroll.css';
import './responsive.css';
import CV from './cv';
import ME from '../../assets/disara.png';   
import Socials from './Socials';
import { FaAnglesDown } from "react-icons/fa6";
import StackIcon from "tech-stack-icons";

const Header = () => {
  const [color, setColor] = useState('rgb(255, 255, 255)');
  const [currentText, setCurrentText] = useState('');
  const texts = ['_Software', '_UI/UX', '_Front-End'];
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const handleScroll = () => {
  const scrollPosition = window.scrollY;

  // Background color change logic
  const maxScroll = 300;
  const colorValue = Math.min(200, (scrollPosition / maxScroll) * 200);
  const newColor = `rgb(${255 - colorValue}, ${255 - colorValue}, ${255 - colorValue})`;
  setColor(newColor);

  // Floating icon logic
  const randomIndex = Math.floor(Math.random() * iconList.length);
  const iconName = iconList[randomIndex];
  const randomX = Math.random() * window.innerWidth;
  const randomY = Math.random() * window.innerHeight;
  const randomRotate = `${Math.floor(Math.random() * 40 - 20)}deg`;

  const newIcon = {
    id: Date.now(),
    name: iconName,
    x: randomX,
    y: randomY,
    rotate: randomRotate,
  };

  setFloatingIcons((prev) => [...prev.slice(-10), newIcon]); // Keep max 10 for performance
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
          setIsDeleting(false);
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

  const iconList = [
  "analytics", "android", "amznwebserv", "atlassian", "aws", "azure", "bitbucket", "canva",
  "c++", "cloudflare", "css3", "dart", "docker", "ec2", "figma", "firebase", "flutter",
  "git", "github", "homebrew", "html5", "java", "js", "materialui", "miro", "mongodb",
  "nextjs", "mysql", "nodejs", "npm", "postman", "prisma", "ps", "python", "reactjs",
  "tailwindcss", "typescript", "vscode", "wordpress", "xd"
];

const [floatingIcons, setFloatingIcons] = useState([]);

  return (
    <header>
      <div className="container header__container">
        <div className="me">
          <img src={ME} alt="Disara" />
        </div>
        
        {floatingIcons.map((icon) => (
          <div
            key={icon.id}
            className="floating-icon"
            style={{
              top: icon.y,
              left: icon.x,
              '--rotate': icon.rotate,
              '--y': `${icon.y}px`
            }}
          >
            <StackIcon name={icon.name} />
          </div>
        ))}


        <h1
          className="fname"
          style={{ color, transition: 'color 0.2s ease' }}
        >
          DISARA
        </h1>
        <div className="name__post">
          <h5 className='creative'>Creatively </h5>
          <h5 className='eng'>engineering </h5>
          <h5 className='product'>{currentText}</h5> 
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

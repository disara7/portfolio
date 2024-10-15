import React, { useEffect } from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Awards from './components/awards/Awards';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import './index.css'; 
import './background.css';

const App = () => {
  useEffect(() => {
    const glow = document.getElementById('glow');
    
    const createSparkle = (x, y) => {
      const sparkle = document.createElement('div');
      sparkle.classList.add('sparkle');
      document.body.appendChild(sparkle);
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;

      // Randomize sparkle direction
      const randomX = (Math.random() - 0.5) * 60;
      const randomY = (Math.random() - 0.5) * 60;
      sparkle.style.transform = `translate(${randomX}px, ${randomY}px)`;

      // Remove sparkle after animation
      setTimeout(() => {
        sparkle.remove();
      }, 1000);
    };

    const moveGlow = (e) => {
      const { clientX: x, clientY: y } = e;
      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;

      // Generate sparkles
      createSparkle(x, y);
    };

    document.addEventListener('mousemove', moveGlow);

    return () => document.removeEventListener('mousemove', moveGlow);
  }, []);

  return (
    <>
    <div class="moving-background"></div>
    <div id="glow"></div> {/* Add the glow effect div here */}
    
      <Header />
      <Nav />
      <About />
      <Skills />
      <Portfolio />
      <Awards />
      <Contact />
      <Footer />
      </>
  );
}

export default App;

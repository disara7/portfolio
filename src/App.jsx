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
import './cursor.css'; 

const App = () => {
  useEffect(() => {
    const circle = document.getElementById('circle');

    const moveCircle = (e) => {
      const { clientX: x, clientY: y } = e;
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;
    };

    const growCircle = () => {
      circle.style.width = '50px';
      circle.style.height = '50px';
    };

    const shrinkCircle = () => {
      circle.style.width = '30px';
      circle.style.height = '30px';
    };

    document.addEventListener('mousemove', moveCircle);
    
    const buttonsAndLinks = document.querySelectorAll('button, a');
    
    buttonsAndLinks.forEach(element => {
      element.addEventListener('mouseenter', growCircle);
      element.addEventListener('mouseleave', shrinkCircle);
    });

    return () => {
      document.removeEventListener('mousemove', moveCircle);
      buttonsAndLinks.forEach(element => {
        element.removeEventListener('mouseenter', growCircle);
        element.removeEventListener('mouseleave', shrinkCircle);
      });
    };
  }, []);

  return (
    <>
      <div className="moving-background"></div>
      
      {/* Outer circle with outline containing the inner white circle */}
      <div id="circle">
        <div></div> {/* Inner circle will be styled through CSS */}
      </div>
      
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

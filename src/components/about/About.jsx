import React from 'react'
import { useEffect } from 'react';
import './about.css'
import './animations.css'

const About = () => {
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in');

    const handleScroll = () => {
      fadeElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 50) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id='about'>
      <div className="about fade-in">
        <h2 className='section__title fade-in'>About Me</h2>
        <br />
        <div className="container about__container fade-in">
          <div className="about__content fade-in">
            <h3 className='about__style fullname fade-in'>
              Disara Mapalagama
            </h3>
            <p className='about__style fade-in'>
              I am a 24-year-old Software Engineering undergraduate who started my coding journey when I was 16. I have always wanted to think differently and apply my knowledge to give creative solutions to problems. 
              <br /><br />
              I have a creative problem-solving approach, an artistic mindset, and a proven ability to learn quickly. I have led award-winning hackathon projects, combining technical skills and design thinking. Passionate about efficient, user-focused systems, I excel in teamwork and solving real-world challenges.
            </p>
            
            <h4 className='about__style fade-in'>Education:</h4>
            <p className='about__style fade-in'>
              <ul className='educard fade-in'>
                <li>BSc. (Hons) in Software Engineering - Sabaragamuwa University of Sri Lanka</li> <br />
                <li>Diploma in Business Management - ESOFT Metro Campus, Kandy</li> <br />
                <li>GCE (A/L) ICT, Combined Mathematics, Physics - Girls' High School, Kandy</li>
              </ul>
              <br />
            </p>
            <div className="cardset fade-in">
              <div className="card">
                <h2 className='number'>8+</h2>
                <p className='number_description'>Years of Experience</p>
              </div>
              <div className="card">
                <h2 className='number'>15+</h2>
                <p className='number_description'>Projects</p>
              </div>
              <div className="card">
                <h2 className='number'>25+</h2>
                <p className='number_description'>Awards and Honors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
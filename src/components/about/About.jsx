import React, { useEffect, useState  } from 'react';
import './about.css';
import './smalldevices.css';
import './animations.css';
import AIESEC from '../../assets/disara.png';

const About = () => {
  const [isImageVisible, setIsImageVisible] = useState(false);

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

    const debounce = (func, delay) => {
      let timeout;
      return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
      };
    };

    const debouncedScroll = debounce(handleScroll, 100);

    window.addEventListener('scroll', debouncedScroll);

    return () => {
      window.removeEventListener('scroll', debouncedScroll);
    };
  }, []);

  const handleAIESECClick = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setIsImageVisible(true);
  };

  const handleClickOutside = () => {
    setIsImageVisible(false);
  };

  useEffect(() => {
    if (isImageVisible) {
      window.addEventListener('click', handleClickOutside);
    } else {
      window.removeEventListener('click', handleClickOutside);
    }

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isImageVisible]);

  return (
    <section id='about'>
      <div className="about fade-in">
        <h2 className='section__title fade-in'>About Me</h2><br />
        <div className="container about__container fade-in">
          <div className="about__content fade-in">
            <h3 className='about__style fullname fade-in'>
              Disara Mapalagama
            </h3>
            <p className='about__style fade-in'>
              I am a 24-year-old Software Engineering undergraduate who started my coding journey when I was 16. I have always wanted to think differently and apply my knowledge to give creative solutions to problems.
              <br /><br />I have a creative problem-solving approach, an artistic mindset, and a proven ability to learn quickly. I have led award-winning hackathon projects, combining technical skills and design thinking. Passionate about efficient, user-focused systems, I excel in teamwork and solving real-world challenges.
            </p>
            
            <h4 className='about__style fade-in'>Education:</h4>
            <ul className='educard fade-in about__style'>
              <li>BSc. (Hons) in Software Engineering - Sabaragamuwa University of Sri Lanka</li>
              <br /><li>Diploma in Business Management - ESOFT Metro Campus, Kandy</li>
              <br /><li>GCE (A/L) ICT, Combined Mathematics, Physics - Girls' High School, Kandy</li>
            </ul>
            <br />
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
            <h4 className='about__style fade-in volunteering'>Volunteering:</h4>
            <div className='voluncard fade-in about__style'>
              <p >IEEE
                <ul>
                  <li>IEEE Sri Lanka Section Student Activities Committee</li>
                  <li>IEEE Young Professionals</li>
                  <li>IEEE Sri Lanka Section SIGHT</li>
                  <li>IEEE Women in Engineering</li>
                  <li>IEEE Student Branch of SUSL</li>
                </ul>
              </p>
              <p>Society of Computer Sciences - SUSL</p>
              <p style={{ cursor: 'pointer' }} onClick={handleAIESECClick}>AIESEC</p>{isImageVisible && (
              <div className="image-popup aiesec">
                <img src={AIESEC} alt="AIESEC" style={{ width: '200px', marginLeft: '10px' }} />
              </div>
            )}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

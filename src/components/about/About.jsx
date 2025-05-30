import React, { useEffect, useState } from 'react';
import './about.css';
import './smalldevices.css';
import './animations.css';
import './voluncard.css';
import './voluncardres.css';
import VolunteerCard from './VolunteerCard';
import volunteerData from './VolunteerData';
import YP from '../../assets/volunteering_logos/ypsl.png';
import INSL from '../../assets/volunteering_logos/insl.png';
import SIGHT from '../../assets/volunteering_logos/slsight.png';
import Nenasa from '../../assets/volunteering_logos/nenasa.png';
import IEEESL from '../../assets/volunteering_logos/ieeesl.png';
import XTREME from '../../assets/volunteering_logos/xtreme.png';
import SLSAC from '../../assets/volunteering_logos/slsac.png';
import AIESEC from '../../assets/volunteering_logos/aiesec.png';
import blank from '../../assets/blank.png';

const About = () => {
  const [popupData, setPopupData] = useState(null);

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

  const handleVlogosClick = (index) => {
    setPopupData(volunteerData[index]);
  };

  const closePopup = () => {
    setPopupData(null);
  };

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
            <br />
            <h4 className='about__style fade-in'>Education:</h4>
            <ul className='educard fade-in about__style'>
              <li>BSc. (Hons) in Software Engineering - Sabaragamuwa University of Sri Lanka</li>
              <br /><li>Diploma in Business Management - ESOFT Metro Campus, Kandy</li>
              <br /><li>GCE (A/L) ICT, Combined Mathematics, Physics - Girls' High School, Kandy</li>
            </ul>
            <br />
            <div className="cardsett fade-in">
              <div className="cardd">
                <h2 className='number'>8+</h2>
                <p className='number_description'>Years of Experience</p>
              </div>
              <div className="cardd">
                <h2 className='number'>15+</h2>
                <p className='number_description'>Projects</p>
              </div>
              <div className="cardd">
                <h2 className='number'>25+</h2>
                <p className='number_description'>Awards and Honors</p>
              </div>
            </div>
            <h4 className='about__style fade-in volunteering'>Volunteering:</h4>
            <div className="volunlogos">
              {volunteerData.map((volunteer, index) => (
                <div
                  key={index}
                  className="vlogos"
                  onClick={() => handleVlogosClick(index)}
                >
                  <img src={volunteer.logo1} alt={volunteer.title} />
                </div>
              ))}
            </div>

            {popupData && (
              <div className="popup">
                <div className="popup-content">
                  <button className="close-button" onClick={closePopup}>
                    &times;
                  </button>
                  <VolunteerCard
                    title={popupData.title}
                    image={popupData.image}
                    description={popupData.description}
                    images={popupData.images}
                    logo1={popupData.logo1}
                    logo2={popupData.logo2}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

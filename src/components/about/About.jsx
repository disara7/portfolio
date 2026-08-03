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
import { ABOUT } from '../../constants/appConstants';

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
        <h2 className='section__title fade-in'>{ABOUT.sectionTitle}</h2>
        <div className="container about__container fade-in">
          <div className="about__content fade-in">
            <h3 className='about__style fullname fade-in'>
              {ABOUT.name}
            </h3>
            <p className='about__style fade-in'>{ABOUT.description[0]}<br/><br/>{ABOUT.description[1]}</p>
            <br />
            <h4 className='about__style fade-in'>{ABOUT.educationTitle}</h4>
            <ul className='educard fade-in about__style'>
              {ABOUT.education.map((item, index) => (
                <React.Fragment key={index}>
                  <li>{item}</li>
                  {index < ABOUT.education.length - 1 && <br />}
                </React.Fragment>
              ))}
            </ul>
            <br />
            <div className="cardsett fade-in">
              {ABOUT.stats.map((stat) => (
                <div className="cardd" key={stat.label}>
                  <h2 className="number">{stat.value}</h2>
                  <p className="number_description">{stat.label}</p>
                </div>
              ))}
            </div>
            <h4 className='about__style fade-in volunteering'>{ABOUT.volunteeringTitle}</h4>
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

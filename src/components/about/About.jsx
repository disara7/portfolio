import React, { useState } from 'react';
import './about.css';
import './smalldevices.css';
import './voluncard.css';
import './voluncardres.css';
import VolunteerCard from './VolunteerCard';
import volunteerData from './VolunteerData';
import { ABOUT } from '../../constants/appConstants';

const About = () => {
  const [popupData, setPopupData] = useState(null);

  return (
    <section id='about' className='about'>
      <h2 className='section__title about__title'>{ABOUT.sectionTitle}</h2>

      <div className='about__grid'>
        {/* ---------- Left: name, bio + stats ---------- */}
        <div className='about__intro'>
          <h3 className='fullname'>{ABOUT.name}</h3>
          {ABOUT.description.map((paragraph, index) => (
            <p key={index} className='about__bio'>{paragraph}</p>
          ))}

          <div className='about__stats'>
            {ABOUT.stats.map((stat) => (
              <div className='about__stat' key={stat.label}>
                <span className='about__stat-value'>
                  {stat.value}<span className='about__plus'>+</span>
                </span>
                <span className='about__stat-label'>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- Right: experience + education ---------- */}
        <div className='about__details'>
          <div className='about__block'>
            <h3 className='about__block-title'>{ABOUT.experienceTitle}</h3>
            {ABOUT.experience.map((job) => (
              <div className='about__row' key={`${job.title}-${job.period}`}>
                <span className='about__row-meta'>{job.period}</span>
                <div className='about__row-body'>
                  <h4 className='about__row-title about__row-title--lg'>{job.title}</h4>
                  <p className='about__row-accent'>{job.company}</p>
                  <p className='about__row-desc'>{job.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className='about__block'>
            <h3 className='about__block-title'>{ABOUT.educationTitle}</h3>
            {ABOUT.education.map((edu) => (
              <div className='about__row' key={edu.title}>
                <span className='about__row-meta'>{edu.level}</span>
                <div className='about__row-body'>
                  <h4 className='about__row-title'>{edu.title}</h4>
                  <p className='about__row-sub'>{edu.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- Volunteering ---------- */}
      <div className='about__block about__volunteering'>
        <h3 className='about__block-title'>{ABOUT.volunteeringTitle}</h3>
        <div className='volunlogos'>
          {volunteerData.map((volunteer, index) => (
            <button
              type='button'
              key={index}
              className='vlogos'
              onClick={() => setPopupData(volunteerData[index])}
            >
              <img src={volunteer.logo1} alt={volunteer.title} />
            </button>
          ))}
        </div>
      </div>

      {popupData && (
        <div className='popup'>
          <div className='popup-content'>
            <button className='close-button' onClick={() => setPopupData(null)}>
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
    </section>
  );
};

export default About;

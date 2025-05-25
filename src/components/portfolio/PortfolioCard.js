import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { BiLogoAdobe } from 'react-icons/bi';
import { FaMedium } from 'react-icons/fa';
import { MdVideoLibrary } from 'react-icons/md';
import { IoMdTrophy } from "react-icons/io";
import StackIcon from 'tech-stack-icons'; 
import './portfolio.css';

const PortfolioCard = ({ project }) => {
  return (
    <div className="portfolio_card">
      <div className="aw">
        {project.award === 'yes' && <div className="iconstyle"><IoMdTrophy /></div>}
        <h3>{project.type}</h3>
      </div>

      <img src={project.image} alt={project.altText} />

      <div className="project-tech-stack">
        {project.tech && project.tech.map((icon, index) => (
          <StackIcon key={`tech-icon-${index}`} name={icon} style={{ width: '1.5rem', marginRight: '0.5rem'}} />
        ))}
      </div>

      <h4>{project.title}</h4>

      <p className="card-desc">{project.description}</p>

      <div className="links">
        {project.github && (
          <div className="relatedlinks">
            <a className='social__icons' href={project.github} target='_blank' rel='noopener noreferrer'>
              <BsGithub />
            </a>
          </div>
        )}
        {project.adobe && (
          <div className="relatedlinks">
            <a className='social__icons' href={project.adobe} target='_blank' rel='noopener noreferrer'>
              <BiLogoAdobe />
            </a>
          </div>
        )}
        {project.medium && (
          <div className="relatedlinks">
            <a className='social__icons' href={project.medium} target='_blank' rel='noopener noreferrer'>
              <FaMedium />
            </a>
          </div>
        )}
        {project.video && (
          <div className="relatedlinks">
            <a className='social__icons' href={project.video} target='_blank' rel='noopener noreferrer'>
              <MdVideoLibrary />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioCard;

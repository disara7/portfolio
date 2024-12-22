import React, { useState } from 'react';
import './portfolio.css';
import './popup.css';
import projects from './PortfolioData';
import PortfolioCard from './PortfolioCard';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const mobileApps = projects.filter((project) => project.category === 'mobile');
  const webApps = projects.filter((project) => project.category === 'web');
  const otherProjects = projects.filter((project) => project.category === 'other');
  const uiProjects = projects.filter((project) => project.category === 'ui');

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  return (
    <section id='portfolio'>
      <div className="portfolio">
        <h2 className='section__title'>Portfolio</h2>
        <br />
        <div className="portfolio_content">
          <h3>Mobile Applications</h3>
          <div className="projects">
            {mobileApps.map((project, index) => (
              <div key={index} onClick={() => handleCardClick(project)}>
                <PortfolioCard project={project} />
              </div>
            ))}
          </div>

          <h3>Web Applications</h3>
          <div className="projects">
            {webApps.map((project, index) => (
              <div key={index} onClick={() => handleCardClick(project)}>
                <PortfolioCard project={project} />
              </div>
            ))}
          </div>

          <h3>UI/UX Projects</h3>
          <div className="projects">
            {uiProjects.map((project, index) => (
              <div key={index} onClick={() => handleCardClick(project)}>
                <PortfolioCard project={project} />
              </div>
            ))}
          </div>

          <h3>Other Fun Projects</h3>
          <div className="projects">
            {otherProjects.map((project, index) => (
              <div key={index} onClick={() => handleCardClick(project)}>
                <PortfolioCard project={project} />
              </div>
            ))}
          </div>

          

          
        </div>
        
      </div>

      {selectedProject && (
        <div className="popup">
          <div className="popup_content">
            <button className="close_button" onClick={closePopup}>
              &times;
            </button>
            {selectedProject.image && (
              <img src={selectedProject.image} alt={selectedProject.title} />
            )}
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.longdescription}</p>
            
            <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;

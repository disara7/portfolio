// Portfolio.js
import React from 'react';
import './portfolio.css';
import projects from './PortfolioData';
import PortfolioCard from './PortfolioCard';

const Portfolio = () => {
  const mobileApps = projects.filter((project) => project.category === 'mobile');
  const webApps = projects.filter((project) => project.category === 'web');
  const otherProjects = projects.filter((project) => project.category === 'other');

  return (
    <section id='portfolio'>
      <div className="portfolio">
        <h2 className='section__title'>Portfolio</h2>
        <br />
        <div className="portfolio_content">
          <h3>Mobile Applications</h3>
          <div className="projects">
            {mobileApps.map((project, index) => (
              <PortfolioCard key={index} project={project} />
            ))}
          </div>

          <h3>Web Applications</h3>
          <div className="projects">
            {webApps.map((project, index) => (
              <PortfolioCard key={index} project={project} />
            ))}
          </div>

          <h3>Other Fun Projects</h3>
          <div className="projects">
            {otherProjects.map((project, index) => (
              <PortfolioCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

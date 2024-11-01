// Portfolio.js
import React from 'react';
import './portfolio.css';
import projects from './PortfolioData';
import PortfolioCard from './PortfolioCard';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <div className="portfolio">
        <h2 className='section__title'>Portfolio</h2>
        <br />
        <div className="portfolio_content">
          <h3>Projects</h3>
          <div className="projects">
            {projects.map((project, index) => (
              <PortfolioCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

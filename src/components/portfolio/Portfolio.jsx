import React, { useState } from 'react';
import './portfolio.css';
import './popup.css';
import projects from './PortfolioData';
import PortfolioCard from './PortfolioCard';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  const categories = ['all', ...new Set(projects.map((project) => project.category))];

  const filteredProjects =
    activeTab === 'all'
      ? projects
      : projects.filter((project) => project.category === activeTab);

  const formatCategory = (key) => {
    if (key === 'mobile') return 'Mobile Applications';
    if (key === 'web') return 'Web Applications';
    if (key === 'other') return 'Other Fun Projects';
    if (key === 'ui') return 'UI/UX Projects';
    return key.charAt(0).toUpperCase() + key.slice(1);
  };

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portfolio">
      <div className="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <br />
        {/* Tabs */}
        <div className="portfolio_tabs">
          {categories.map((key) => (
            <button
              key={key}
              className={`tab_button ${activeTab === key ? 'active' : ''}`}
              onClick={() => setActiveTab(key)}
            >
              {formatCategory(key)}
            </button>
          ))}
        </div>

        {/* Filtered Projects */}
        <div className="portfolio_content">
          <h3>{activeTab === 'all' ? 'All Projects' : formatCategory(activeTab)}</h3>
          <div className="projects">
            {filteredProjects.map((project, index) => (
              <div key={index} onClick={() => handleCardClick(project)}>
                <PortfolioCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popup */}
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
            <a
              href={selectedProject.link || selectedProject.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;

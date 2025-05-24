// src/components/Popup.jsx
import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { BiLogoAdobe } from 'react-icons/bi';
import { FaMedium } from 'react-icons/fa';
import { MdVideoLibrary } from 'react-icons/md';
import './popup.css';

const Popup = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="popup">
      <div className="popup_content">
        <button className="close_button" onClick={onClose}>
          &times;
        </button>

        {project.image && (
          <img src={project.image} alt={project.title} />
        )}

        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="links">
          {project.github && (
            <div className="relatedlinks">
              <a className="social__icons" href={project.github} target="_blank" rel="noopener noreferrer">
                <BsGithub />
              </a>
            </div>
          )}
          {project.adobe && (
            <div className="relatedlinks">
              <a className="social__icons" href={project.adobe} target="_blank" rel="noopener noreferrer">
                <BiLogoAdobe />
              </a>
            </div>
          )}
          {project.medium && (
            <div className="relatedlinks">
              <a className="social__icons" href={project.medium} target="_blank" rel="noopener noreferrer">
                <FaMedium />
              </a>
            </div>
          )}
          {project.video && (
            <div className="relatedlinks">
              <a className="social__icons" href={project.video} target="_blank" rel="noopener noreferrer">
                <MdVideoLibrary />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;

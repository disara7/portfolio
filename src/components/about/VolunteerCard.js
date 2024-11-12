// VolunteerCard.js
import React from 'react';


const VolunteerCard = ({ title, image, description }) => {
  return (
    <div className="voluncard fade-in">
      <img src={image} alt={title} className="voluncard__image" />
      <h4 className="voluncard__title">{title}</h4>
      <p className="voluncard__description">{description}</p>
    </div>
  );
};

export default VolunteerCard;

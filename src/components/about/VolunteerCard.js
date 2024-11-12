// VolunteerCard.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const VolunteerCard = ({ title, image, description, images = [] }) => {  // Default to an empty array
    const carouselSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  
    return (
      <div className="voluncard fade-in">
        <div className="voluncard__content">
          <h3 className="voluncard__title">{title}</h3>
          <p className="voluncard__description">{description}</p>
        </div>
        <div className="voluncard__carousel">
          <Slider {...carouselSettings}>
            {images.map((img, index) => (
              <div key={index}>
                <img src={img} alt={`${title} ${index + 1}`} className="voluncard__carousel-image" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  };
  

export default VolunteerCard;

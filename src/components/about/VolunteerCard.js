import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const VolunteerCard = ({ title, image, description, images, logo1, logo2 }) => {
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
          <div className="voluncard__logos">
            <div className="voluncard__logo">
              <img src={logo1} alt={`${title} logo 1`} className="voluncard__logo-image" />
            </div>
            <div className="voluncard__logo">
              <img src={logo2} alt={`${title} logo 2`} className="voluncard__logo-image" />
            </div>
          </div>
          <h3 className="voluncard__title">{title}</h3>
          <p className="voluncard__description">{description}</p>
        </div>
        <div className="voluncard__carousel">
          <Slider {...carouselSettings}>
            {images && images.length > 0 ? (
              images.map((img, index) => (
                <div key={index}>
                  <img src={img} alt={title} className="voluncard__carousel-image" />
                </div>
              ))
            ) : (
              <div>No images available</div>
            )}
          </Slider>
        </div>
      </div>
    );
};

export default VolunteerCard;

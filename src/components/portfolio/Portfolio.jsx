import React from 'react';
import './portfolio.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';
import p1 from '../../assets/trophybanner.png';
import p2 from '../../assets/Image2.png';
import p3 from '../../assets/Image3.png';
import { BsGithub } from "react-icons/bs";

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2 className='section__title'>Portfolio</h2>
      <div className="pcarousel">
      <Carousel className='bigcarousel'>
        
        {/* Mobile Applications */}
        <div className="project_card">
          <h3>Mobile Applications</h3>
          <Carousel thumbWidth={60}>
            <div className='carousel'>
              <img src={p1} alt="Mobile App Project 1" />
              <h4>Trophy - Employee Loyalty Rewarding System</h4>
              <p>“Trophy” is a non-monetary token-based loyalty mobile application solution to maintain your company’s employees’ sense of community and improve the team member experience in the office with more interactivity, inclusivity, and motivation.</p>
              <div className="relatedlinks"><a className='social__icons' href="https://github.com/disara7" target='_blank'><BsGithub /></a></div>
            </div>
            <div className='carousel'>
              <img src={p2} alt="Mobile App Project 2" />
              <h4>ShopSense - Online Clothing Shopping for Blind People</h4>
              <p>“ShopSense” provides online shopping accessibility for visually impaired people.</p>
            </div>
            <div className='carousel'>
              <img src={p3} alt="Mobile App Project 3" />
              <h4>Learning Management System</h4>
              <p>An interactive LMS for educational institutions.</p>
            </div>
          </Carousel>
        </div>

        {/* Web Applications */}
        <div className="project_card">
          <h3>Web Applications</h3>
          <Carousel thumbWidth={60}>
            <div className='carousel'>
              <img src={p1} alt="Web App Project 1" />
              <h4>UniStore - Online Store for Preloved University Essentials</h4>
              <p>An e-commerce platform for university students to buy and sell second-hand items.</p>
            </div>
            <div className='carousel'>
              <img src={p2} alt="Web App Project 2" />
              <h4>My Portfolio</h4>
              <p>A personal portfolio showcasing various web development projects.</p>
            </div>
            <div className='carousel'>
              <img src={p3} alt="Web App Project 3" />
              <h4>IEEE WIE Sri Lanka Section - Website Redesign</h4>
              <p>A redesigned website for the IEEE WIE Sri Lanka Section.</p>
            </div>
          </Carousel>
        </div>

        {/* UI/UX Case Studies */}
        <div className="project_card">
          <h3>UI/UX Case Studies</h3>
          <Carousel thumbWidth={60}>
            <div className='carousel'>
              <img src={p1} alt="UI/UX Case Study 1" />
              <h4>Trophy - Employee Loyalty Rewarding System</h4>
              <p>A UI/UX case study on the Trophy loyalty rewarding system.</p>
            </div>
            <div className='carousel'>
              <img src={p2} alt="UI/UX Case Study 2" />
              <h4>Sentry - A Solution to Human-Elephant Conflicts</h4>
              <p>A solution to mitigate human-elephant conflicts through a mobile app.</p>
            </div>
            <div className='carousel'>
              <img src={p3} alt="UI/UX Case Study 3" />
              <h4>ResQ - Disaster Management System</h4>
              <p>An interactive system to manage disaster responses efficiently.</p>
            </div>
            <div className='carousel'>
              <img src={p3} alt="UI/UX Case Study 4" />
              <h4>Watts - Gamified Power Saving</h4>
              <p>A gamified mobile app for saving electricity through engaging features.</p>
            </div>
          </Carousel>
        </div>
      </Carousel>
      </div>
    </section>
  );
}

export default Portfolio;

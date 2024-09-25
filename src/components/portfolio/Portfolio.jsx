import React from 'react'
import './portfolio.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';
import p1 from '../../assets/Image1.png'
import p2 from '../../assets/Image2.png'
import p3 from '../../assets/Image3.png'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2 className='section__title'>Portfolio</h2>
      <div className="projects">
      <div className="project_card">
      <h3>Mobile Applications</h3>
      <Carousel>
        <div className='carousel'>
        <img src={p1} alt="" />
        <h4>Trophy - Employee Loyalty Rewarding System</h4>
        <p>“Trophy” is a non-monetary token-based loyalty mobile application solution to maintain your company’s employees’ sense of community and improve the team member experience in the office with more interactivity, inclusivity, and motivation.</p>
        </div>
        <div className='carousel'>
        <img src={p2} alt="" />
        <h4>ShopSense - Online Clothing Shopping for Blind People</h4>
        <p>“Trophy” is a non-monetary token-based loyalty mobile application solution to maintain your company’s employees’ sense of community and improve the team member experience in the office with more interactivity, inclusivity, and motivation.</p>
        </div>
        <div className='carousel'>
        <img src={p3} alt="" />
        <h4>Trophy - Employee Loyalty Rewarding System</h4>
        <p>“Trophy” is a non-monetary token-based loyalty mobile application solution to maintain your company’s employees’ sense of community and improve the team member experience in the office with more interactivity, inclusivity, and motivation.</p>
        </div>
      </Carousel>
        
      
    </div>
      
    
    <div className="project_card">
        <h3>Web Applications</h3>
        <Carousel>
        <div className='carousel'>
        <img src={p1} alt="" />
        <h4>UniStore - Online Store for Preloved University Essentials</h4>
        <p>“Trophy” is a non-monetary token-based loyalty mobile application solution to maintain your company’s employees’ sense of community and improve the team member experience in the office with more interactivity, inclusivity, and motivation.</p>
        </div>
        <div className='carousel'>
        <img src={p2} alt="" />
        <h4>My Portfolio</h4>
        <p>“Trophy” is a non-monetary token-based loyalty mobile application solution to maintain your company’s employees’ sense of community and improve the team member experience in the office with more interactivity, inclusivity, and motivation.</p>
        </div>
        <div className='carousel'>
        <img src={p3} alt="" />
        <h4>IEEE WIE Sri Lanka Section - Website Redesign</h4>
        <p>“Trophy” is a non-monetary token-based loyalty mobile application solution to maintain your company’s employees’ sense of community and improve the team member experience in the office with more interactivity, inclusivity, and motivation.</p>
        </div>
      </Carousel>
      
    </div>
      </div>
      <div className="casestudies">
      <div className="project_card">
        <h3>UI/UX Case Studies</h3>
        <Carousel>
        <div className='carousel'>
        <img src={p1} alt="" />
        <h4>Trophy - Employee Loyalty Rewarding System</h4>
        <p>“Trophy” is a non-monetary token-based loyalty mobile application solution to maintain your company’s employees’ sense of community and improve the team member experience in the office with more interactivity, inclusivity, and motivation.</p>
        </div>
        <div className='carousel'>
        <img src={p2} alt="" />
        <h4>Sentry - A Solution to Human-Elephant Conflicts</h4>
        <p>“Trophy” is a non-monetary token-based loyalty mobile application solution to maintain your company’s employees’ sense of community and improve the team member experience in the office with more interactivity, inclusivity, and motivation.</p>
        </div>
        <div className='carousel'>
        <img src={p3} alt="" />
        <h4>ResQ - Disaster Management System</h4>
        <p>“Trophy” is a non-monetary token-based loyalty mobile application solution to maintain your company’s employees’ sense of community and improve the team member experience in the office with more interactivity, inclusivity, and motivation.</p>
        </div>
        <div className='carousel'>
        <img src={p3} alt="" />
        <h4>Watts - Gamified Power Saving</h4>
        <p>“Trophy” is a non-monetary token-based loyalty mobile application solution to maintain your company’s employees’ sense of community and improve the team member experience in the office with more interactivity, inclusivity, and motivation.</p>
        </div>
      </Carousel>
      
    </div>
      </div>
    </section>
  )
}

export default Portfolio
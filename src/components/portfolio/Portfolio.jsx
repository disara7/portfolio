import React from 'react';
import './portfolio.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';
import p1 from '../../assets/trophybanner.png';
import p2 from '../../assets/shopsense_banner.png';
import p3 from '../../assets/Image3.png';
import p4 from '../../assets/myjourneybanner.png';
import p5 from '../../assets/lms.png';
import p6 from '../../assets/unistore.png';
import p7 from '../../assets/techgrid.png';
import p8 from '../../assets/myportfolio.png';
import { BsGithub } from "react-icons/bs";
import { BiLogoAdobe } from "react-icons/bi";
import { FaMedium } from "react-icons/fa6";
import { MdVideoLibrary } from "react-icons/md";

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <div className="portfolio">
      <h2 className='section__title'>Portfolio</h2><br />
      
      <div className="portfolio_content">
      <h3>Mobile Applications</h3>
      <div className="projects">
      <div className="portfolio_card">
      <h3>GROUP PROJECT</h3>
          <img src={p1} alt="Web App Project 1" />
          <h4>Trophy - Employee Loyalty Rewarding System</h4>
          
          <p>“Trophy” is a non-monetary token-based loyalty rewarding system to improve a company’s employees’ work experience.</p>
          <div className="links">
              <div className="relatedlinks"><a className='social__icons' href="https://github.com/disara7" target='_blank'><BsGithub /></a></div>
              <div className="relatedlinks"><a className='social__icons' href="https://github.com/disara7" target='_blank'><BiLogoAdobe /></a></div>
              <div className="relatedlinks"><a className='social__icons' href="https://github.com/disara7" target='_blank'><FaMedium /></a></div>
              <div className="relatedlinks"><a className='social__icons' href="https://github.com/disara7" target='_blank'><MdVideoLibrary /></a></div> 
          </div>
        </div>
        <div className="portfolio_card">
        <h3>GROUP PROJECT</h3>
          <img src={p2} alt="Web App Project 1" />
          <h4>ShopSense - Online Clothing Shopping for Blind People</h4>
          <p>“ShopSense” provides online shopping accessibility for visually impaired people.</p>
          <div className="links">
              <div className="relatedlinks"><a className='social__icons' href="https://github.com/disara7" target='_blank'><BsGithub /></a></div>
              <div className="relatedlinks"><a className='social__icons' href="https://github.com/disara7" target='_blank'><BiLogoAdobe /></a></div>
              <div className="relatedlinks"><a className='social__icons' href="https://github.com/disara7" target='_blank'><FaMedium /></a></div>
              <div className="relatedlinks"><a className='social__icons' href="https://github.com/disara7" target='_blank'><MdVideoLibrary /></a></div> 
          </div>
        </div>
        <div className="portfolio_card">
        <h3>GROUP PROJECT</h3>
          <img src={p5} alt="Web App Project 1" />
          <h4>LMSSUSL - Learning Management System</h4>
          <p>An interactive Learning Management System for educational institutions.</p>
          <div className="links">
              <div className="relatedlinks"><a className='social__icons' href="https://github.com/disara7" target='_blank'><BsGithub /></a></div>
              <div className="relatedlinks"><a className='social__icons' href="https://github.com/disara7" target='_blank'><BiLogoAdobe /></a></div>
              <div className="relatedlinks"><a className='social__icons' href="https://github.com/disara7" target='_blank'><FaMedium /></a></div>
              <div className="relatedlinks"><a className='social__icons' href="https://github.com/disara7" target='_blank'><MdVideoLibrary /></a></div> 
          </div>
        </div>
        
      </div>
      <div className="portfolio_card">
      <h3>GROUP PROJECT</h3>
          <img src={p4} alt="Web App Project 1" />
          
          <h4>MYJOURNEY - AI Based Travel Planning</h4>
          <p>An interactive LMS for educational institutions.</p>
          <div className="links">
              <div className="relatedlinks"><a className='social__icons' href="https://github.com/disara7" target='_blank'><BsGithub /></a></div>
              <div className="relatedlinks"><a className='social__icons' href="https://github.com/disara7" target='_blank'><BiLogoAdobe /></a></div>
              <div className="relatedlinks"><a className='social__icons' href="https://github.com/disara7" target='_blank'><FaMedium /></a></div>
              <div className="relatedlinks"><a className='social__icons' href="https://github.com/disara7" target='_blank'><MdVideoLibrary /></a></div> 
          </div>
        </div>
        <br />
        <br />
        
        <h3>Web Applications</h3>
        <div className="projects">
          <div className="portfolio_card">
          <h3>GROUP PROJECT</h3>
            <img src={p6} alt="Web App Project 1" />
            <h4>UniStore - Online Store for Preloved University Essentials</h4>
            <p>An e-commerce platform for university students to buy and sell second-hand items.</p>
            <div className="links">
                <div className="relatedlinks"><a className='social__icons' href="https://github.com/disara7" target='_blank'><BsGithub /></a></div>
                <div className="relatedlinks"><a className='social__icons' href="https://github.com/disara7" target='_blank'><BiLogoAdobe /></a></div>
                <div className="relatedlinks"><a className='social__icons' href="https://github.com/disara7" target='_blank'><FaMedium /></a></div>
                <div className="relatedlinks"><a className='social__icons' href="https://github.com/disara7" target='_blank'><MdVideoLibrary /></a></div> 
            </div>
          </div>
          <div className="portfolio_card">
          <h3>GROUP PROJECT</h3>
          <img src={p1} alt="Web App Project 1" />
            <h4>IEEE WIE Sri Lanka Section - Website Redesign</h4>
            <p>A redesigned website for the IEEE WIE Sri Lanka Section.</p>
            <div className="links">
                <div className="relatedlinks"><a className='social__icons' href="https://github.com/disara7" target='_blank'><BsGithub /></a></div>
                <div className="relatedlinks"><a className='social__icons' href="https://github.com/disara7" target='_blank'><BiLogoAdobe /></a></div>
                <div className="relatedlinks"><a className='social__icons' href="https://github.com/disara7" target='_blank'><FaMedium /></a></div>
                <div className="relatedlinks"><a className='social__icons' href="https://github.com/disara7" target='_blank'><MdVideoLibrary /></a></div> 
            </div>
          </div>
          <div className="portfolio_card">
          <h3>INDIVIDUAL PROJECT</h3>
          <img src={p7} alt="Web App Project 1" />
            <h4>TechGrid - E-Commerce Web Application</h4>
            <p>An e-commerce website for tech gadgets, focusing on automated software testing</p>
            <div className="links">
                <div className="relatedlinks"><a className='social__icons' href="https://github.com/disara7" target='_blank'><BsGithub /></a></div>
                <div className="relatedlinks"><a className='social__icons' href="https://github.com/disara7" target='_blank'><BiLogoAdobe /></a></div>
                <div className="relatedlinks"><a className='social__icons' href="https://github.com/disara7" target='_blank'><FaMedium /></a></div>
                <div className="relatedlinks"><a className='social__icons' href="https://github.com/disara7" target='_blank'><MdVideoLibrary /></a></div> 
            </div>
          </div>
          
        </div>
        <div className="projects">
        <div className="portfolio_card">
          <h3>INDIVIDUAL PROJECT</h3>
          <img src={p8} alt="Web App Project 1" />
            <h4>My Portfolio</h4>
            <p>A responsive website to showcase my skills, projects, and achievements.</p>
            <div className="links">
                <div className="relatedlinks"><a className='social__icons' href="https://github.com/disara7" target='_blank'><BsGithub /></a></div>
                <div className="relatedlinks"><a className='social__icons' href="https://github.com/disara7" target='_blank'><BiLogoAdobe /></a></div>
                <div className="relatedlinks"><a className='social__icons' href="https://github.com/disara7" target='_blank'><FaMedium /></a></div>
                <div className="relatedlinks"><a className='social__icons' href="https://github.com/disara7" target='_blank'><MdVideoLibrary /></a></div> 
            </div>
          </div>
          <div className="portfolio_card">
          <h3>GROUP PROJECT | ONGOING</h3>
          <img src={p7} alt="Web App Project 1" />
            <h4>Haven - </h4>
            <p>AI powered mental health oasis. It is a comprehensive online web-based platform that leverages AI and VR technologies.</p>
            <div className="links">
                <div className="relatedlinks"><a className='social__icons' href="https://github.com/disara7" target='_blank'><BsGithub /></a></div>
                <div className="relatedlinks"><a className='social__icons' href="https://github.com/disara7" target='_blank'><BiLogoAdobe /></a></div>
                <div className="relatedlinks"><a className='social__icons' href="https://github.com/disara7" target='_blank'><FaMedium /></a></div>
                <div className="relatedlinks"><a className='social__icons' href="https://github.com/disara7" target='_blank'><MdVideoLibrary /></a></div> 
            </div>
          </div>
        </div>
          
        <br />
        <br />
        <h3>UI/UX Research Case Studies</h3>
        <div className="portfolio_card">
        <img src={p1} alt="Web App Project 1" />
            <h4>UniStore - Online Store for Preloved University Essentials</h4>
            <p>An e-commerce platform for university students to buy and sell second-hand items.</p>
            <div className="links">
                <div className="relatedlinks"><a className='social__icons' href="https://github.com/disara7" target='_blank'><BsGithub /></a></div>
                <div className="relatedlinks"><a className='social__icons' href="https://github.com/disara7" target='_blank'><BiLogoAdobe /></a></div>
                <div className="relatedlinks"><a className='social__icons' href="https://github.com/disara7" target='_blank'><FaMedium /></a></div>
                <div className="relatedlinks"><a className='social__icons' href="https://github.com/disara7" target='_blank'><MdVideoLibrary /></a></div> 
            </div>

        </div>
      </div>

      </div>
      
    </section>
  );
}

export default Portfolio;

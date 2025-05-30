import React from 'react'
import './blog.css'
import './blogresponsive.css'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaMedium } from "react-icons/fa6";

const Blog = () => {
  return (
    <section id='blog'>
      <div className="blog">
        <br />
        <h2 className='section__title'>Blog</h2>
        <div className="blogcard">
          <div className="headerbar"><FaMedium /></div>
          <h1>“Trophy”: Employee Loyalty Rewarding App | UI/UX Case Study</h1>
          <p>“Trophy” is a non-monetary token-based loyalty mobile application solution to maintain your company’s employees’ sense of community and improve the team member experience in the office with more interactivity, inclusivity, and motivation.</p>
          <a href="https://medium.com/@disaradm07/trophy-employee-loyalty-app-ui-ux-case-study-32f781794a92" target="_blank" rel="noopener noreferrer">
            <MdKeyboardDoubleArrowRight />
          </a>
        </div>
        <div className="blogcard">
          <div className="headerbar"><FaMedium /></div>
          <h1>Can We Use AI Personas for User Testing?</h1>
          <p>As funny as it sounds, using AI personas instead of actual users for user testing can seem like an absurd idea. Since software is mainly meant to solve an existing issue, it’s created for actual, existing users. But there could be imaginary problems that software solutions can solve…</p>
          <a href="https://medium.com/@disaradm07/can-we-use-ai-personas-for-user-testing-8cfe64d1f0f7" target="_blank" rel="noopener noreferrer">
            <MdKeyboardDoubleArrowRight />
          </a>
        </div>
        <div className="blogcard">
          <div className="headerbar"><FaMedium /></div>
          <h1>“Watts”: Gamified Power Saving Mobile App | UI/UX Case Study</h1>
          <p>“Watts” is a mobile application that tracks electricity usage via smart energy meters in the household and aims to promote energy conservation and economic growth within individuals.</p>
          <a href="https://medium.com/@disaradm07/watts-gamified-power-saving-mobile-app-ui-ux-case-study-f3f4c57db871" target="_blank" rel="noopener noreferrer">
            <MdKeyboardDoubleArrowRight />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Blog

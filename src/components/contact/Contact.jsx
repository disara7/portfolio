import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import './contactResponsive.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (response) => {
          setStatusMessage('Email sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          setStatusMessage('Failed to send email. Please try again later.');
        }
      );
  };

  return (
    <section id="contact">
      <div className="contact">
        <br />
        <h2 className="section__title">Contact Me</h2>
        <br />
        <div className="contactform" id="form">
          <form id="contactForm" onSubmit={handleSubmit}>
            <span>Name</span>
            <input
              className="field"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <br />

            <span>Email</span>
            <input
              className="field"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <br />

            <span>Message</span>
            <textarea
              className="field"
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <br />

            <input type="submit" value="Send e-mail" className="submit" />
          </form>
          {statusMessage && <p>{statusMessage}</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;

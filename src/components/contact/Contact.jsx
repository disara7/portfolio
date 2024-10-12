import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section id='contact'>
      <div className="contact">
		<br />
	  <h2 className='section__title'>Contact Me</h2>
	  <br />
	  <div className='contactform' id="form">
	  <form action="" id="contactForm" method="post">
    <span>Name</span>
    <input class="field" type="text" name="name" placeholder="Enter your name" /><br />
    
    <span>Email</span>
    <input class="field" type="email" name="email" placeholder="Enter your email" /><br />
    
    <span id="captcha"></span>
    
    <span>Message</span>
    <textarea class="field" name="message" placeholder="Enter your message"></textarea><br />
    
    <input type="submit" name="submit" value="Send e-mail" class="submit" />
</form>

		</div>
	  </div>
    </section>
  )
}

export default Contact
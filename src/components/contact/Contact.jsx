import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section id='contact'>
      <h2 className='section__title'>Contact Me</h2>
      <div className='contactform' id="form">
			<form action="" id="contactForm" method="post">
				<span>Name</span>
				<input className='field' type="text" name="name" class="name" placeholder="Enter your name" /><br />
				<span>Email</span>
				<input className='field' type="text" name="email" class="email" placeholder="Enter your email" /><br />
				<span id="captcha"></span>
				<span>Message</span>
				<textarea className='field' class="message" placeholder="Enter your message" ></textarea><br />
				<input type="submit" name="submit" value="Send e-mail" class="submit" ></input>
			</form>
		</div>
    </section>
  )
}

export default Contact
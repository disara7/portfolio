import React from 'react'
import './about.css'

const About = () => {
  return (
    <section id='about'>
      <h2 className='section__title'>About Me</h2>
      
      <div className="container about__container">
        <div className="about__content">
          <h3 className='about__style fullname'>
            Disara Mapalagama
          </h3>
          <p className='about__style'>
          I am a Software Engineering undergraduate. For a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin
          </p>
          <h4 className='about__style'>Education</h4>
          <p className='about__style'>
            <ul className='educard'>
              <li>BSc. (Hons) in Software Engineering - Sabaragamuwa University of Sri Lanka</li> <br />
              <li>Diploma in Business Management - ESOFT Metro Campus, Kandy</li> <br />
              <li>GCE (A/L) ICT, Combined Mathematics, Physics - Girls' High School, Kandy</li>
            </ul>
         
          </p>
          <div className="cardset">
          <div class="card">
            <h2 className='number'>8+</h2>
            <p className='number_description'>Years of Experience</p>
          </div>
          <div class="card">
            <h2 className='number'>15+</h2>
            <p className='number_description'>Projects</p>
          </div>
          <div class="card">
            <h2 className='number'>25+</h2>
            <p className='number_description'>Awards and Honors</p>
          </div>

          </div>
          
        </div>
      </div>
    </section>
  )
}

export default About
import React from 'react'
import './awards.css'
import { AWARDS } from '../../constants/appConstants'

const Awards = () => {
  return (
    <section id='awards' className='awards'>
      <h2 className='section__title'>{AWARDS.sectionTitle}</h2>

      <div className='timeline__scroll'>
        <ol className='timeline'>
          {AWARDS.items.map((award, index) => (
            <li
              key={`${award.date}-${index}`}
              className={`timeline__item ${index % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'}`}
            >
              <span className='timeline__marker' aria-hidden='true'></span>
              <div className='timeline__card'>
                <span className='timeline__date'>{award.date}</span>
                <h3 className='timeline__title'>{award.title}</h3>
                <p className='timeline__desc'>{award.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Awards

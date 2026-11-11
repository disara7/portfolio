import React from 'react'
import './skills.css'
import { SKILLS } from '../../constants/appConstants'

// Returns the number of squares to show, clamped to 0..maxLevel and rounded to a whole number.
const getSquareCount = (level, maxLevel = SKILLS.maxLevel) => {
  const value = Math.round(Number(level))
  if (!Number.isFinite(value)) return 0
  return Math.min(Math.max(value, 0), maxLevel)
}

const SkillSquares = ({ level }) => (
  <td className='skill_box' aria-label={`${getSquareCount(level)} out of ${SKILLS.maxLevel}`}>
    {Array.from({ length: getSquareCount(level) }, (_, i) => (
      <div key={i} className='shape shape-square'></div>
    ))}
  </td>
)

const SkillTable = ({ skills }) => (
  <table>
    <tbody>
      {skills.map(({ name, level }) => (
        <tr key={name}>
          <td>{name}</td>
          <SkillSquares level={level} />
        </tr>
      ))}
    </tbody>
  </table>
)

const Skills = () => {
  return (
    <section id='skills'>
      <div className="skills">
        {SKILLS.groups.map((tables, groupIndex) => (
          <div className="skills__container" key={groupIndex}>
            {groupIndex === 0 && (
              <>
                <h2 className='section__title'>{SKILLS.sectionTitle}</h2>
                <br />
              </>
            )}
            <div className="skill_table">
              {tables.map((skills, tableIndex) => (
                <SkillTable key={tableIndex} skills={skills} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills

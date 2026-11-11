export const ABOUT = {
  sectionTitle: 'About Me',
  name: 'Disara Mapalagama',

  description: [
    'I am a 24-year-old Software Engineering undergraduate who started my coding journey when I was 16. I have always wanted to think differently and apply my knowledge to give creative solutions to problems.',
    'I have a creative problem-solving approach, an artistic mindset, and a proven ability to learn quickly. I have led award-winning hackathon projects, combining technical skills and design thinking. Passionate about efficient, user-focused systems, I excel in teamwork and solving real-world challenges.',
  ],

  educationTitle: 'Education:',
  education: [
    'BSc. (Hons) in Software Engineering - Sabaragamuwa University of Sri Lanka',
    'Diploma in Business Management - ESOFT Metro Campus, Kandy',
    "GCE (A/L) ICT, Combined Mathematics, Physics - Girls' High School, Kandy",
  ],

  stats: [
    {
      value: '8+',
      label: 'Years of Experience',
    },
    {
      value: '15+',
      label: 'Projects',
    },
    {
      value: '25+',
      label: 'Awards and Honors',
    },
  ],

  volunteeringTitle: 'Volunteering:',
};

// `level` is the number of squares shown for a skill (0 – maxLevel).
export const SKILLS = {
  sectionTitle: 'Skills',
  maxLevel: 5,

  // Each group renders as one `.skills__container`; each inner array is one table column.
  groups: [
    [
      [
        { name: 'React.js', level: 5 },
        { name: 'Next.js', level: 4 },
        { name: 'HTML', level: 5 },
        { name: 'CSS', level: 5 },
      ],
      [
        { name: 'Node.js', level: 4 },
        { name: 'Express.js', level: 3 },
        { name: 'Springboot', level: 2 },
        { name: 'REST APIs', level: 4 },
      ],
      [
        { name: 'Flutter', level: 3 },
        { name: 'Dart', level: 3 },
        { name: 'JavaScript', level: 5 },
        { name: 'Typescript', level: 5 },
      ],
    ],
    [
      [
        { name: 'Python', level: 4 },
        { name: 'C', level: 3 },
        { name: 'Java', level: 4 },
        { name: 'OOP', level: 5 },
      ],
      [
        { name: 'MySQL', level: 5 },
        { name: 'MongoDB', level: 3 },
        { name: 'Firebase', level: 3 },
        { name: 'AWS', level: 4 },
      ],
      [
        { name: 'Git', level: 5 },
        { name: 'Docker', level: 3 },
        { name: 'Postman', level: 5 },
        { name: 'Agile', level: 5 },
      ],
    ],
    [
      [
        { name: 'JIRA', level: 4 },
        { name: 'JUnit', level: 3 },
        { name: 'Figma', level: 4 },
        { name: 'Adobe Illustrator', level: 4 },
      ],
      [
        { name: 'Leadership', level: 5 },
        { name: 'Teamwork', level: 5 },
        { name: 'Communication', level: 5 },
        { name: 'Collaboration', level: 5 },
      ],
    ],
  ],
};
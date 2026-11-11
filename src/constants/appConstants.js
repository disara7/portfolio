export const ABOUT = {
  sectionTitle: 'About Me',
  name: 'Disara Mapalagama',

  description: [
    'I am a 26-year old Software Engineering graduate passionate about combining technology, creativity, and design to solve real-world problems. Experienced in full-stack development, frontend engineering, and UI/UX design, with a focus on building intuitive, engaging, and user-centered digital experiences.',
    'I bring an artistic mindset, creative problem-solving skills, and adaptability, backed by experience leading award-winning hackathon projects and collaborating with clients and cross-functional teams. Always eager to explore emerging technologies and turn innovative ideas into meaningful solutions.'
  ],

  experienceTitle: 'Work Experience',
  // Newest first. Each `description` entry renders as one bullet point.
  experience: [
    {
      period: 'Aug 2026 – Present',
      title: 'AI Solutions Builder / Web Developer',
      company: 'SolarIT Solutions',
      description: [
        'Develop web experiences using React, Vite, WordPress and WooCommerce, focusing on UI/UX.',
        'Engage directly with clients and stakeholders through design reviews and requirement discussions.',
        'Use AI-assisted tools such as Claude Code and Lovable for rapid prototyping and development.',
      ],
    },
    {
      period: 'Sep 2025 – Aug 2026',
      title: 'Associate Software Engineer',
      company: 'Dutton Labs LK',
      description: [
        'Worked on web applications using React, Next.js, TypeScript, Node.js and Strapi.',
        'Built REST APIs and BFF services integrating CMS and databases.',
        'Investigated database deadlocks, production API failures, deployment issues and abnormal traffic patterns using application logs, monitoring and debugging tools.',
      ],
    },
    {
      period: 'Mar 2025 – Aug 2025',
      title: 'Software Engineer – Intern',
      company: 'Dutton Labs LK',
      description: [
        'Developed REST API integrations, frontend features and database functionality.',
        'Gained hands-on experience with AWS, Docker, Git/Bitbucket, Postman, testing and Agile development practices while working on full-stack web applications using React.js, Next.js, Node.js, Strapi CMS and MySQL.',
      ],
    },
  ],

  educationTitle: 'Education',
  education: [
    {
      level: 'Undergraduate',
      title: 'BSc. (Hons) in Software Engineering',
      institution: 'Sabaragamuwa University of Sri Lanka',
    },
    {
      level: 'Diploma',
      title: 'Diploma in Business Management',
      institution: 'ESOFT Metro Campus, Kandy',
    },
    {
      level: 'Advanced Level',
      title: 'GCE (A/L) ICT, Combined Mathematics, Physics',
      institution: "Girls' High School, Kandy",
    },
  ],

  // `value` is the number; a "+" accent is added by the component.
  stats: [
    {
      value: '8',
      label: 'Years of Experience',
    },
    {
      value: '15',
      label: 'Projects',
    },
    {
      value: '25',
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

export const AWARDS = {
  sectionTitle: 'Awards',

  // Newest first; cards alternate left/right of the timeline line.
  items: [
    {
      date: 'DECEMBER 2023',
      title: '2nd Runners Up - Code With WIE 2023',
      description: "Mine and my friend Minuri Hewage's latest project 'Haven'. Organized by IEEE Sri Lanka Section - Women In Engineering",
    },
    {
      date: 'AUGUST 2023',
      title: '1st Runners Up - iX 23 | XR Based Designathon',
      description: 'Team Pixel Concepts. 24-Hour designathon held at the IIT premises. Our XR based UI/UX design solution "WellnessGrocers" was highly praised for its realistic-ness.',
    },
    {
      date: 'JULY 2023',
      title: 'Winner - Lazarus 2.0 Eidos | Ideathon Competition',
      description: 'MyJourney (Modern AI-Powered Travel Planning Mobile App) by Team Regex Native (Disara Mapalagama and Minuri Hewage) was awarded the prize for the most outstanding innovative idea at the ideathon organized by IEEE PES - SLIIT',
    },
    {
      date: 'MAY 2023',
      title: '2nd Runner Up - HerStage | All Island Competition for Women Entrepreneurs',
      description: 'Myself and my friend Minuri Hewage placed third in the all-island competition for women entrepreneurs organized by Youth4SriLanka - AIESEC Sri Lanka, with our business idea "MyJourney - the modern travel planning mobile application".',
    },
    {
      date: 'MARCH 2023',
      title: '1st Runner Up - Codecon 3.0 | Inter-University Hackathon',
      description: 'Team Regex Native (Disara Mapalagama, Minuri Hewage), with our solution to the economic crisis in Sri Lanka: "MyJourney - the modern travel planning mobile application"',
    },
    {
      date: 'JANUARY 2023',
      title: 'Finalist - IEEE INSL 2022 | Idea Stage',
      description: 'Me and my team AltInnovate made it to the top 10 teams of IEEE INSL 2022 - Idea Stage category with our business idea "StyleUp - Clothing rental mobile application".',
    },
    {
      date: 'JANUARY 2023',
      title: 'Merit Award - Codefest 2023 | Inter-University Hackathon',
      description: '24-Hour hackathon organized by Faculty of Computing - SLIIT',
    },
    {
      date: 'OCTOBER 2022',
      title: "Winner - IEEE INSL '22 Provincial Competition (Sabaragamuwa Province)",
      description: 'Organized by IEEE Innovation Nation Sri Lanka. Me and my team AltInnovate became the winner of the provincial competition Sabaragamuwa Province of IEEE INSL 2022 - Idea Stage category with our business idea "StyleUp - Clothing rental mobile application".',
    },
    {
      date: 'JULY 2022',
      title: 'Semi Finalists - IDEALIZE 2022 | Inter-University Hackathon',
      description: 'StyleUp - Mobile Application by MiNd HaCkErS. Organized by AIESEC in University of Moratuwa',
    },
    {
      date: 'MAY 2022',
      title: '2nd Runners Up - HackTron v1.0 – Game Development Bootcamp & Hackathon 2021',
      description: 'Shut - PC car simulator game. Organized by IEEE Computer Society of SLTC',
    },
    {
      date: 'FEBRUARY 2022',
      title: 'Finalists - Designathon 2022 | Codefest Inter-University Hackathon',
      description: 'Organized by Department of Computer Science & Software Engineering - SLIIT',
    },
    {
      date: '2022',
      title: "Finalists - Hack Like a Girl | Women's Hackathon 2022 by SLASSCOM in collaboration with IFC",
      description: 'Me and my team MiNd HaCkErS participated and got selected to the final 15 teams with our business idea "MedAura - the pharmacy connecting and organ donor-donee connecting platform"',
    },
    {
      date: 'JUNE 2018',
      title: "3rd Place - Conexion '18 | Inter-School ICT Quiz Competition",
      description: "Inter-school ICT Quiz competition organized for the ICT Day of Mahamaya Girls' College, Kandy.",
    },
    {
      date: 'NOVEMBER 2017',
      title: '1st Place - Delito Cibernetico 2017 | Inter-School Web Designing Competition',
      description: 'Inter-School Web Designing competition organized for the annual ICT day of Hillwood College Kandy, under the theme "Cybersecurity"',
    },
    {
      date: 'OCTOBER 2017',
      title: '1st Place - Evolution Tecnica 17 | Inter-School Web Designing Competition',
      description: "Inter-School Web Designing Competition organized for the Annual ICT day of St. Sylvester's College, Kandy.",
    },
    {
      date: 'OCTOBER 2017',
      title: '1st Place - Evolution Tecnica 17 | Inter-School ICT Quiz Competition',
      description: "Inter-School Quiz Competition organized for the Annual ICT day of St. Sylvester's College, Kandy.",
    },
    {
      date: 'OCTOBER 2017',
      title: "2nd Place - Sagacious '17 | Inter-School Web Designing Competition",
      description: "Inter-School Web Designing competition organized for the Annual ICT Day of Pushpadana Girls' College, Kandy.",
    },
    {
      date: 'AUGUST 2017',
      title: '2nd Place - Inter-School Web Designing Competition',
      description: "Inter school web designing competition organized for the annual IT Day of St. Anthony's Girls' College, Kandy.",
    },
    {
      date: 'JANUARY 2017',
      title: '1st Round - IT MasterMind Quiz Programme 2017 | Season 02',
      description: 'Issued by CSSL and ESOFT Metro Campus. Passed the written test held at ESOFT Metro Campus Kandy, leading the team of three and got selected for the first round of the competition that aired on ITN.',
    },
  ],
};

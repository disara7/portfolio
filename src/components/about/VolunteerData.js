// volunteerData.js
import IEEEImage from '../../assets/disara.jpeg';
import YP from '../../assets/volunteering_logos/ypsl.png';
import INSL from '../../assets/volunteering_logos/insl.png';
import SIGHT from '../../assets/volunteering_logos/slsight.png';
import Nenasa from '../../assets/volunteering_logos/nenasa.png';
import IEEESL from '../../assets/volunteering_logos/ieeesl.png';
import XTREME from '../../assets/volunteering_logos/xtreme.png';
import SLSAC from '../../assets/volunteering_logos/slsac.png';
import AIESEC from '../../assets/volunteering_logos/aiesec.png';
import blank from '../../assets/blank.png';
import IEEE from '../../assets/disara.png';
import AIESECImage from '../../assets/volunteering/aiesec/aiesec1.jpg';
import VolunteerImg1 from '../../assets/disara.png';
import VolunteerImg2 from '../../assets/disara.png';
import pic1 from '../../assets/volunteering/sight/nenasaoc.jpg';
import sac1 from '../../assets/volunteering/slsac/sac1.jpg';
import sac2 from '../../assets/volunteering/slsac/sac2.jpg';
import sac3 from '../../assets/volunteering/slsac/sac3.JPG';
import pic4 from '../../assets/volunteering/pic4.jpg';
import INSLImage from '../../assets/volunteering/insl/insl.jpeg'
import socslogo from '../../assets/volunteering_logos/socslogo.png';
import rotaractlogo from '../../assets/volunteering_logos/rotaract.png';
import wielogo from '../../assets/volunteering_logos/wielogo.png';

const volunteerData = [
  {
    title: "Public Visibility Team Member",
    image: pic1,
    description: "As a volunteer for the IEEE Sri Lanka Section SIGHT, I contributed to leveraging technology for humanitarian initiatives. My contributions included designing creative templates for birthday posts, managing the LinkedIn and Facebook profiles to enhance the group's online presence, and participating in impactful projects like the Sihinayata Peraman program, fostering sustainable development and community engagement.",
    images: [pic1, pic1, pic1],
    logo1: SIGHT,
    logo2: blank,
    },
{
    title: "Secretary - Nenasa '24",
    image: pic1,
    description: "Served as the Secretary of Nenasa, a project series by IEEE Sri Lanka Section SIGHT. Nenasa is a project aiming to promote STEM education among Sri Lankan school students.",
    images: [pic1, pic1, pic1],
    logo1: Nenasa,
    logo2: blank,
    },
    {
        title: "Publicity Team Member - Member Activities (SLSAC)",
        image: IEEEImage,
        description: "As a member of the SLSAC Member Activities Sub-Committee, I contributed to IEEE events like Andaharaya, BOOST, and SL SYW Congress 2023 as a publicity team member, managing social media pages and enhancing outreach. I also compered at the SL SYW Congress and moderated activities at BOOST, showcasing leadership and communication skills.",
        images: [sac1, sac3, sac3],
        logo1: IEEESL,
        logo2: SLSAC,
        },
  {
    title: "Logistics Team Member - IEEE INSL '22",
    image: IEEEImage,
    description: "Served as a Logistics Team Member for IEEE Innovation Nation Sri Lanka 2022.",
    images: [INSLImage, INSLImage, INSLImage],
    logo1: YP,
    logo2: INSL,
  },
  {
    title: "Ambassador - IEEEXtreme 16.0",
    image: AIESECImage,
    description: "Acted as an Ambassador for IEEEXtreme 16.0, promoting this global 24-hour programming competition among participants, providing guidance, and ensuring successful event participation.",
    images: [pic4, pic4, pic4],
    logo1: XTREME,
    logo2: blank,
  },
  {
    title: "Assistant Secretary - IEEE WIE Affinity Group of SUSL",
    image: AIESECImage,
    description: "Participated in community development initiatives and leadership programs as an active member of the Rotaract Club of Sabaragamuwa University of Sri Lanka, promoting social impact and personal growth.",
    images: [blank, blank, blank],
    logo1: wielogo,
    logo2: blank,
  },
  {
    title: "AIESEC Volunteer",
    image: AIESEC,
    description: "Supported AIESEC in Sabaragamuwa University of Sri Lanka as part of the Outgoing Global Talent (oGT) function, enabling students to explore international opportunities and develop leadership skills.",
    images: [AIESECImage, AIESECImage, AIESECImage],
    logo1: AIESEC,
    logo2: blank,
  },
  {
    title: "Committee Member - Society of Computer Sciences (SOCS) '22",
    image: AIESECImage,
    description: "Contributed as a committee member of SOCS '22, assisting in planning and executing events to enhance technical knowledge and collaboration among computer science students.",
    images: [blank, blank, blank],
    logo1: socslogo,
    logo2: blank,
  },
  
  {
    title: "Rotaractor - Rotaract Club of SUSL",
    image: AIESECImage,
    description: "Participated in community development initiatives and leadership programs as an active member of the Rotaract Club of Sabaragamuwa University of Sri Lanka, promoting social impact and personal growth.",
    images: [blank, blank, blank],
    logo1: rotaractlogo,
    logo2: blank,
  },
  
];

export default volunteerData;

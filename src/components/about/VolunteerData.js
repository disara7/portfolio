// volunteerData.js
import IEEEImage from '../../assets/disara.jpeg';
import YP from '../../assets/volunteering_logos/ypsl.png';
import INSL from '../../assets/volunteering_logos/insl.png';
import SIGHT from '../../assets/volunteering_logos/slsight.png';
import Nenasa from '../../assets/volunteering_logos/nenasa.png';
import IEEESL from '../../assets/volunteering_logos/ieeesl.png';
import XTREME from '../../assets/volunteering_logos/xtreme.png';
import SLSAC from '../../assets/volunteering_logos/slsac.png';
import blank from '../../assets/blank.png';
import IEEE from '../../assets/disara.png';
import AIESECImage from '../../assets/disara.png';
import VolunteerImg1 from '../../assets/disara.png';
import VolunteerImg2 from '../../assets/disara.png';

const volunteerData = [
{
    title: "Secretary - Nenasa '24",
    image: IEEEImage,
    description: "Served as the Secretary of Nenasa, a project series by IEEE Sri Lanka Section SIGHT. Nenasa is a project aiming to promote STEM education among Sri Lankan school students.",
    images: [IEEEImage, VolunteerImg1, VolunteerImg2],
    logo1: SIGHT,
    logo2: Nenasa,
    },
    {
        title: "Publicity Team Member - Member Activities (SLSAC)",
        image: IEEEImage,
        description: "Served as the Secretary of Nenasa, a project series by IEEE Sri Lanka Section SIGHT.",
        images: [IEEEImage, VolunteerImg1, VolunteerImg2],
        logo1: IEEESL,
        logo2: SLSAC,
        },
  {
    title: "Logistics Team Member - IEEE INSL '22",
    image: IEEEImage,
    description: "Served as a Logistics Team Member for IEEE Innovation Nation Sri Lanka 2022.",
    images: [IEEEImage, VolunteerImg1, VolunteerImg2],
    logo1: YP,
    logo2: INSL,
  },
  {
    title: "Ambassador - IEEEXtreme 16.0",
    image: AIESECImage,
    description: "Volunteer role focused on community development and leadership.",
    images: [AIESECImage, VolunteerImg1, VolunteerImg2],
    logo1: XTREME,
    logo2: blank,
  },
  {
    title: "AIESEC Volunteer",
    image: AIESECImage,
    description: "Volunteer role focused on community development and leadership.",
    images: [AIESECImage, VolunteerImg1, VolunteerImg2],
    logo1: IEEE,
    logo2: blank,
  },
  {
    title: "Committee Member - Society of Computer Sciences (SOCS) '22",
    image: AIESECImage,
    description: "Volunteer role focused on community development and leadership.",
    images: [AIESECImage, VolunteerImg1, VolunteerImg2],
    logo1: IEEE,
    logo2: blank,
  },
  {
    title: "Rotaractor - SUSL",
    image: AIESECImage,
    description: "Volunteer role focused on community development and leadership.",
    images: [AIESECImage, VolunteerImg1, VolunteerImg2],
    logo1: IEEE,
    logo2: blank,
  },
];

export default volunteerData;

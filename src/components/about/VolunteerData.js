// volunteerData.js
import IEEEImage from '../../assets/disara.jpeg';
import IEEE from '../../assets/disara.jpeg';
import AIESECImage from '../../assets/disara.png';
import VolunteerImg1 from '../../assets/disara.png';
import VolunteerImg2 from '../../assets/disara.png';

const volunteerData = [
  {
    title: "IEEE Young Professionals",
    image: IEEEImage,
    description: "Active member contributing to IEEE Young Professionals events.",
    images: [IEEEImage, VolunteerImg1, VolunteerImg2],
    logo1: IEEE,
    logo2: IEEE,
  },
  {
    title: "AIESEC Volunteer",
    image: AIESECImage,
    description: "Volunteer role focused on community development and leadership.",
    images: [AIESECImage, VolunteerImg1, VolunteerImg2],
    logo1: IEEE,
    logo2: IEEE,
  },
];

export default volunteerData;

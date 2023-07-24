import {
  FaHome,
  FaUser,
  // FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpeg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpeg';
import Work4 from './assets/project-4.jpeg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  // {
  //   id: 3,
  //   name: 'Portfolio',
  //   icon: <FaFolderOpen className='nav__icon' />,
  //   path: '/portfolio',
  // },

  {
    id: 3,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name ',
    description: 'Akshay',
  },

  {
    id: 2,
    title: 'Last Name ',
    description: 'Shankariya',
  },

  {
    id: 3,
    title: 'Age ',
    description: '23 Years',
  },

  {
    id: 4,
    title: 'Nationality ',
    description: 'Indian',
  },

  // {
  //   id: 5,
  //   title: 'Github : ',
  //   description: 'github.com/aashank',
  // },

  {
    id: 5,
    title: 'Phone ',
    description: '+91 98 818 46 437',
  },

  {
    id: 6,
    title: 'Address ',
    description: 'Nagpur',
  },

  {
    id: 7,
    title: 'Email ',
    description: 'akshayshankariya@gmail.com',
  },

  {
    id: 8,
    title: 'Languages ',
    description: 'English, Hindi, Marathi',
  },

  // {
  //   id: 10,
  //   title: 'Linkedin : ',
  //   description: 'www.linkedin.com/in/akshay-shankariya/',
  // },

];

export const stats = [
  {
    id: 1,
    no: '2+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '5',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '2',
    title: 'No. of Companies <br /> Worked In',
  },

  {
    id: 4,
    no: '2',
    title: ' Awards <br /> Won',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2022 Jan - PRESENT',
    title: 'Associate Technologist <span> Kratin LLC </span>',
    desc: "Architected and designed the application's architecture, leveraging React JS and Angular JS to build a highly responsive and intuitive user interface",
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2021 July - 2022 Jan',
    title: 'Intern Technologist <span> Kratin LLC </span>',
    desc: 'During my Intern Technologist role, I specialized as an Angular Developer, focusing on integrating applications into the Angular framework',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2020 Jun - 2020 Aug ',
    title: 'Intern <span>S2P Edutech</span>',
    desc: 'During my internship, I was responsible for designing websites using Angular and ensuring timely delivery to clients. ',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2015',
    title: 'BE <span> SB Jain Institue of Technology Management </span>',
    desc: 'I completed my Bachelor of Engineering (BE) in Electronics and Telecommunication with a CGPA of 8.98.',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2017',
    title: 'HSC <span> Shri Umiyashankar Narayanji College </span>',
    desc: 'I completed my higher secondary education (12th grade) at Shri Umiyashankar Narayanji College with a percentage of 67.38%',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2015',
    title: 'SSC <span> Shri Rajendra High School </span>',
    desc: 'I completed my secondary education (10th grade) at Shri Rajendra High School with a percentage of 78.60%',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '85',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '70',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '80',
  },

  {
    id: 4,
    title: 'Bootstrap',
    percentage: '80',
  },

  {
    id: 5,
    title: 'Angular Material',
    percentage: '70',
  },

  {
    id: 6,
    title: 'Angular',
    percentage: '65',
  },

  {
    id: 7,
    title: 'React',
    percentage: '65',
  },

  {
    id: 8,
    title: 'Stencil.js',
    percentage: '40',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Photo Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Website Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Video Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Video Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Landing Page',
    details: [
      {
        title: 'Project : ',
        desc: 'Website',
      },
      {
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        title: 'Language : ',
        desc: 'React JS, Node JS',
      },
      {
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Photo Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dibble.com',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];

import project1 from '../textures/project/project1.mp4'
import project2 from '../textures/project/project2.mp4'
import project3 from '../textures/project/project3.mp4'
import project4 from '../textures/project/project4.mp4'
import logo1 from '../assets/project-logo1.png'
import logo2 from '../assets/project-logo2.png'
import logo3 from '../assets/project-logo3.png'
import logo4 from '../assets/project-logo4.png'
import spotlight4 from '../assets/spotlight4.png'
import spotlight3 from '../assets/spotlight3.png'
import spotlight2 from '../assets/spotlight2.png'
import spotlight1 from '../assets/spotlight1.png'
import tailwindCss from '../assets/tailwindcss.png'
import react from '../assets/react.svg' 
import mongo from '../assets/Mongo.png'
import node from '../assets/node.jpg'


export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };



  export const myProjects = [
    {
      title: 'Pinki-Fy',
      desc: 'PinkiFy.in is a feature-rich e-commerce platform designed to offer users a seamless online shopping experience. Built with the robust React.js framework and styled with Bootstrap, the application ensures a responsive and visually appealing interface.',
      subdesc:
        'Secure login and registration system with the help of Local Storage. Persistent shopping cart functionality allowing users to add, update, and remove products.',
      href: 'https://pinkif-y.netlify.app/',
      texture: project1,
      logo: logo1,
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: spotlight1,
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: react,
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: tailwindCss,
        },
      ],
    },
    {
      title: '🌍 EcoTrack: Empowering Sustainable Change 🌱',
      desc: "EcoTrack is all about helping individuals and organizations reduce their carbon footprint with smart, AI-powered insights. Whether it's optimizing energy usage or embracing better waste management practices, EcoTrack gives you simple, personalized steps to make sustainability part of everyday life. 🌿",
      subdesc:
        'We’re building a movement that’s all about small, meaningful actions that add up to big change. Let’s take this journey together, one step at a time, toward a more sustainable future! ',
      href: 'https://github.com/akshay2004-akki/MERN-Project/tree/main/EcoTrack',
      texture: project2,
      logo: logo2,
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: spotlight2,
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: react,
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: tailwindCss,
        },
        {
          id: 3,
          name: 'Mongo DB',
          path: mongo,
        },
        {
          id: 4,
          name: 'Node Js',
          path: node,
        },
      ],
    },
    {
      title: 'Vikings.go',
      desc: 'A travel Agency Platform where you can easily book you favourit resort in Cheaper price',
      subdesc:
        'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
      href: 'https://vikingsgo.netlify.app',
      texture: project3,
      logo:logo3,
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: spotlight3,
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: react,
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: tailwindCss,
        },
      ],
    },
    {
      title: 'EcoFin India',
      desc: 'A platform that helps you u reduce your carbon footprints by completing task',
      subdesc:
        'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
      href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
      texture: project4,
      logo: logo4,
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: spotlight4,
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: react,
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: tailwindCss,
        },
        {
          id: 3,
          name: 'Mongo DB',
          path: mongo,
        },
        {
          id: 4,
          name: 'Node Js',
          path: node,
        },
      ],
    },
  ];
  
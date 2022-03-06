import { Icn1, Icn2, Icn3, Icn4, Icn5, Icn6, Icn7, Icn8, Icn9 } from '../index';
import { ProImg1, ProImg2, ProImg3 } from '../index';
export const navItems = () => {
  return [
    {
      id: 'ni-1',
      title: 'About me',
      link: 'home',
    },
    {
      id: 'ni-2',
      title: 'skills',
      link: 'section-1',
    },
    {
      id: 'ni-3',
      title: 'portfolio',
      link: 'section-2',
    },
    // {
    //   id: 'ni-4',
    //   title: 'contact me',
    //   link: 'section-3',
    // },
  ];
};

export const skillCards = () => {
  return [
    {
      id: 'sc-1',
      color: 'var(--color-star-html)',
      skillIcon: Icn2,
      skillName: 'HTML5',
      skillRate: 4,
      skillDesc: 'Hello Html Lorem ipsum dolor sit, amet consectetur osam.',
    },
    {
      id: 'sc-2',
      color: 'var(--color-star-css)',
      skillIcon: Icn3,
      skillName: 'CSS3',
      skillRate: 4,
      skillDesc: 'Hello Html Lorem ipsum dolor sit, amet consectetur osam.',
    },
    {
      id: 'sc-3',
      color: 'var(--color-star-js)',
      skillIcon: Icn1,
      skillName: 'JAVASCRIPT',
      skillRate: 4,
      skillDesc: 'Hello Html Lorem ipsum dolor sit, amet consectetur osam.',
    },
    {
      id: 'sc-4',
      color: 'var(--color-star-react)',
      skillIcon: Icn4,
      skillName: 'REACT.JS',
      skillRate: 4,
      skillDesc: 'Hello Html Lorem ipsum dolor sit, amet consectetur osam.',
    },
    {
      id: 'sc-5',
      color: 'var(--color-star-bootstrap)',
      skillIcon: Icn7,
      skillName: 'BOOTSTRAP',
      skillRate: 3,
      skillDesc: 'Hello Html Lorem ipsum dolor sit, amet consectetur osam.',
    },
    {
      id: 'sc-6',
      color: 'var(--color-star-css)',
      skillIcon: Icn8,
      skillName: 'PHOTOSHOP',
      skillRate: 3,
      skillDesc: 'Hello Html Lorem ipsum dolor sit, amet consectetur osam.',
    },
  ];
};

export const skillLearning = () => {
  return [
    {
      id: 'sc-7',
      color: 'var(--color-star-node)',
      skillIcon: Icn5,
      skillName: 'NODEJS',
      skillRate: 3,
      skillDesc: 'Hello Html Lorem ipsum dolor sit, amet consectetur osam.',
    },
    {
      id: 'sc-8',
      color: 'var(--color-star-node)',
      skillIcon: Icn6,
      skillName: 'Mongodb',
      skillRate: 3,
      skillDesc: 'Hello Html Lorem ipsum dolor sit, amet consectetur osam.',
    },
    {
      id: 'sc-9',
      color: 'var(--color-star-html)',
      skillIcon: Icn9,
      skillName: 'figma',
      skillRate: 2,
      skillDesc: 'Hello Html Lorem ipsum dolor sit, amet consectetur osam.',
    },
  ];
};

export const projects = () => {
  return [
    {
      id: 'pro-1',
      imgUrl: ProImg1,
      liveUrl: 'https://dawitesfa.github.io/bankist-practice-app/',
      gitUrl: 'https://github.com/dawitesfa/bankist-practice-app.git',
      appName: 'Bankist',
      desc: 'Bankist app is a simple app that developed by me while learning web development course. The design is by a known Udemy instructor Jonas S.',
    },
    {
      id: 'pro-2',
      imgUrl: ProImg2,
      liveUrl: 'https://dawitesfa.github.io/learning-natours/',
      gitUrl: 'https://github.com/dawitesfa/learning-natours.git',
      appName: 'Na-Tours',
      desc: 'Na-Tours app is a simple app that developed by me while learning web development course and it is prepared with HTML + CSS/SASS. The design is by a known udemy instructor Jonas S.',
    },
    {
      id: 'pro-3',
      imgUrl: ProImg3,
      liveUrl: 'https://dawitesfa.github.io/note-keeper/',
      gitUrl: 'https://github.com/dawitesfa/note-keeper.git',
      appName: 'Note Keeper',
      desc: 'Note Keeper app is a simple app that developed by me while learning web development course and it is prepared with HTML + CSS/SASS. The design is by a known udemy instructor Jonas S.',
    },
  ];
};

export const socials = () => [
  {
    iconColor: 'var(--color-star-css)',
    id: 'soc-1',
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/dawit-tesfamariam-ab1450220/',
    iconClass: 'bi bi-linkedin',
  },
  {
    iconColor: 'var(--color-star-css)',
    id: 'soc-2',
    name: 'Twitter',
    link: 'https://twitter.com/DawitTesfa19?t=2LI-Mpp70LOiFWKtfxP1HQ&s=09',
    iconClass: 'bi bi-twitter',
  },
  {
    iconColor: 'grey',
    id: 'soc-3',
    name: 'Github',
    link: 'https://github.com/dawitesfa',
    iconClass: 'bi bi-github',
  },
];

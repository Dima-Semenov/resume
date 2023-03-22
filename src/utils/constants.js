import {
  FaInstagram,
  FaLinkedinIn,
  FaSkype,
  FaFacebookF,
  FaGithub,
  FaReact,
  FaHtml5,
  FaNpm,
  FaVuejs,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiRedux,
  SiVite,
  SiTailwindcss,
  SiGraphql,
  SiJest,
} from 'react-icons/si';
import { MdWork, MdSchool, MdStar, MdOutlineMailOutline } from 'react-icons/md';
import { DiCss3, DiJavascript1, DiSass } from 'react-icons/di';
import { HiDocumentText } from 'react-icons/hi';
import { BiMap, BiPhone } from 'react-icons/bi';
import { BsPersonFill } from 'react-icons/bs';
import images from './images';

export const MENU = [
  {
    title: 'about',
    Icon: BsPersonFill,
  },
  {
    title: 'experience',
    Icon: MdWork,
  },
  {
    title: 'education',
    Icon: MdSchool,
  },
  {
    title: 'portfolio',
    Icon: HiDocumentText,
  },
  {
    title: 'skills',
    Icon: MdStar,
  },
];

export const SOCIAL_MEDIA = [
  {
    Icon: FaInstagram,
    link: 'https://www.instagram.com/dima_sem08',
  },
  {
    Icon: FaLinkedinIn,
    link: 'https://www.linkedin.com/in/dima-semenov-2b6226205',
  },
  {
    Icon: FaSkype,
    link: 'live:.cid.52ea747a1d8cf44b',
  },
  {
    Icon: FaFacebookF,
    link: 'https://www.facebook.com/dima.semenov.92102/',
  },
  {
    Icon: FaGithub,
    link: 'https://github.com/Dima-Semenov',
  },
];

export const CONTACT_DETAILS = [
  {
    id: 1,
    Icon: BiMap,
    label: 'Khmelnytskyi, Ukraine',
    link: 'https://www.google.com.ua/maps/place/Хмельницький',
    target: '_blank',
  },
  {
    id: 2,
    Icon: BiPhone,
    label: '+380971738598',
    link: 'tel:+380971738598',
    target: '_self',
  },
  {
    id: 3,
    Icon: MdOutlineMailOutline,
    label: 'semenovdima998@gmail.com',
    link: 'mailto:semenovdima998@gmail.com',
    target: '_self',
  },
];

export const WORKS = [
  {
    id: 1,
    position: 'Middle Front-End developer',
    company: 'Trinetix',
    description:
      'Development of new features, performance of more complex tasks, site optimization, coverage of functionality with tests.',
    period: 'March 2022 - Present',
  },
  {
    id: 2,
    position: 'Junior Front-End developer',
    company: 'Trinetix',
    description:
      'Worked in this company as a junior Front-End developer. My responsibilities included: development of new functionality, support and refactoring of old functionality, fixing bugs and defects.',
    period: 'November 2021 - March 2022',
  },
  {
    id: 3,
    position: 'Trainee Front-End developer',
    company: 'Resty Applications',
    description:
      'Worked in this company as a trainee Front-End developer. My responsibilities included: finding bugs, learning about processes and teamwork, fixing bugs.',
    period: 'April 2021 - November 2021',
  },
];

export const SELF_EDUCATION_DATA = [
  {
    id: 1,
    title: 'W3Schools Online Web Tutorials',
  },
  {
    id: 2,
    title: 'developer.mozilla.org',
  },
  {
    id: 3,
    title: 'uk.javascript.info',
  },
  {
    id: 4,
    title: 'codewars(4 kyu), leetCode',
  },
  {
    id: 5,
    title: 'udemy',
  },
  {
    id: 6,
    title: 'YouTube video tutorials',
  },
];

export const SKILLS_DATA = [
  {
    Icon: FaReact,
    name: 'React',
    persent: 95,
  },
  {
    Icon: FaHtml5,
    name: 'HTML5',
    persent: 100,
  },
  {
    Icon: DiCss3,
    name: 'CSS 3',
    persent: 95,
  },
  {
    Icon: FaVuejs,
    name: 'Vue',
    persent: 45,
  },
  {
    Icon: DiJavascript1,
    name: 'JavaScript',
    persent: 90,
  },
  {
    Icon: DiSass,
    name: 'Sass',
    persent: 90,
  },
  {
    Icon: SiTypescript,
    name: 'TypeScript',
    persent: 65,
  },
  {
    Icon: SiRedux,
    name: 'Redux',
    persent: 95,
  },
  {
    Icon: SiRedux,
    name: 'Redux Toolkit',
    persent: 75,
  },
  {
    Icon: SiVite,
    name: 'Vite',
    persent: 70,
  },
  {
    Icon: SiTailwindcss,
    name: 'TailwindCss',
    persent: 80,
  },
  {
    Icon: SiGraphql,
    name: 'GraphQL',
    persent: 40,
  },
  {
    Icon: SiJest,
    name: 'Jest',
    persent: 65,
  },
  {
    Icon: FaNpm,
    name: 'NPM',
    persent: 65,
  },
];

export const PORTFOLIO_DATA = [
  {
    id: 1,
    title: 'Rick and Morty',
    description:
      'A simple site about the Rick and Morty cartoon. The site includes three separate pages: a page about all the characters of the cartoon, a page about all the locations where the events take place, and a page about all the episodes of the cartoon.',
    img: images.rick_and_morty,
    linkToGitHub: 'https://github.com/Dima-Semenov/rick_and_morty/tree/develop',
    linkToDemo: 'https://dima-semenov.github.io/rick_and_morty/',
  },
  {
    id: 2,
    title: 'Miami Condo Kings',
    description: 'Landing site for a real estate company',
    img: images.maimi,
    linkToGitHub: 'https://github.com/Dima-Semenov/miami',
    linkToDemo: 'https://Dima-Semenov.github.io/layout_miami/',
  },
  {
    id: 3,
    title: 'Currency Converter',
    description:
      'Site for currency conversion. Through the API, the current exchange rate is obtained and calculated according to the selected currencies. Counts more than 200 currencies',
    img: images.currency_converter,
    linkToGitHub: 'https://github.com/Dima-Semenov/Currency-Converter',
    linkToDemo: 'https://currency-exchange-demo.netlify.app/',
  },
  {
    id: 4,
    title: 'Fairy Forest',
    description: 'A simple site with a parallax effect',
    img: images.parallax,
    linkToGitHub: 'https://github.com/Dima-Semenov/Parallax_effect',
    linkToDemo: 'https://parallax-effect-demo-deploy.netlify.app/',
  },
];

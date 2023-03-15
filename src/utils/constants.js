import {
  FaInstagram,
  FaLinkedinIn,
  FaSkype,
  FaFacebookF,
  FaGithub,
} from 'react-icons/fa';

import { BsPersonFill } from 'react-icons/bs';
import { MdWork, MdSchool, MdStar, MdOutlineMailOutline } from 'react-icons/md';
import { HiDocumentText } from 'react-icons/hi';
import { BiMap, BiPhone } from 'react-icons/bi';

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
  // 'interests',
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
    label: 'Kyiv, Ukraine',
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
    position: 'Strong Junior Front-End developer',
    company: 'Trinetix',
    description:
      'Development of new features, performance of more complex tasks, site optimization, coverage of functionality with tests.',
    period: 'June 2022 - Present',
  },
  {
    id: 2,
    position: 'Junior Front-End developer',
    company: 'Trinetix',
    description:
      'Worked in this company as a junior Front-End developer. My responsibilities included: development of new functionality, support and refactoring of old functionality, fixing bugs and defects.',
    period: 'November 2021 - June 2022',
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

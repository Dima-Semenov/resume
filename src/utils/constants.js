import {
  FaInstagram,
  FaLinkedinIn,
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
  SiNextdotjs,
  SiChakraui,
  SiShadcnui,
  SiNodedotjs,
  SiMui,
  SiJquery,
  SiAntdesign,
  SiTestinglibrary,
  SiGit,
  SiJavascript,
  SiCss3,
} from 'react-icons/si';
import { MdWork, MdSchool, MdStar, MdOutlineMailOutline } from 'react-icons/md';
import { HiDocumentText } from 'react-icons/hi';
import { BiMap, BiPhone } from 'react-icons/bi';
import { BsPersonFill } from 'react-icons/bs';
import { RiBearSmileFill } from 'react-icons/ri';
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
    Icon: FaGithub,
    link: 'https://github.com/Dima-Semenov',
  },
];

export const CONTACT_DETAILS = [
  {
    id: 1,
    Icon: BiMap,
    label: 'Krakow, Poland',
    link: 'https://www.google.com.ua/maps/place/Krakow',
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
    label: 'dima.semenov.fe@gmail.com',
    link: 'mailto:dima.semenov.fe@gmail.com',
    target: '_self',
  },
];

export const WORKS = [
  {
    id: 1,
    position: 'Strong Middle Front-End developer',
    company: 'Trinetix',
    description:
      'Development of complex features and high-impact user flows. Actively improved application performance and optimized rendering. Participated in planning, code reviews, mentoring junior developers, writing automated Jest tests, and collaborating directly with business stakeholders.',
    period: 'June 2024 - Present',
  },
  {
    id: 2,
    position: 'Middle Front-End developer',
    company: 'Trinetix',
    description:
      'Development of new features from scratch, refactoring legacy logic, and implementing more complex tasks. Focus on performance optimization, accessibility improvements, and UI consistency. Covered critical business logic with Jest tests. Worked in a distributed international team, participated in decomposition, estimations, documentation writing, and improving project maintainability.',
    period: 'March 2022 - June 2024',
  },
  {
    id: 3,
    position: 'Junior Front-End developer',
    company: 'Trinetix',
    description:
      'Development of new functionality, support and refactoring of existing features, fixing bugs and defects. Collaborated with QA, backend, and design teams. Improved components, reduced technical debt, and learned best practices for scalable React applications. Participated in daily agile processes and gradually took on more responsibility within the team.',
    period: 'November 2021 - March 2022',
  },
  {
    id: 4,
    position: 'Trainee Front-End developer',
    company: 'Resty Applications',
    description:
      'Initial stage of my commercial career. Responsible for finding and fixing bugs, learning project structure, and working with Git and Agile processes. Gained core understanding of React, component logic, and teamwork. Contributed to UI updates and small feature improvements under supervision.',
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

export const SKILL_CATEGORIES = {
  CORE_SKILL: 'CORE_SKILL',
  STATE_MANAGEMENT: 'STATE_MANAGEMENT',
  UI_LIBRARIES: 'UI_LIBRARIES',
  TESTING_LIBRARIES: 'TESTING_LIBRARIES',
  BUNDLERS_AND_TOOLS: 'BUNDLERS_AND_TOOLS',
  OTHER_TECH: 'OTHER_TECH',
  FOREIGN_LANGUAGES: 'FOREIGN_LANGUAGES',
};

export const SKILL_CATEGORIES_ORDER = {
  [SKILL_CATEGORIES.CORE_SKILL]: 1,
  [SKILL_CATEGORIES.STATE_MANAGEMENT]: 2,
  [SKILL_CATEGORIES.UI_LIBRARIES]: 3,
  [SKILL_CATEGORIES.TESTING_LIBRARIES]: 4,
  [SKILL_CATEGORIES.BUNDLERS_AND_TOOLS]: 5,
  [SKILL_CATEGORIES.OTHER_TECH]: 6,
  [SKILL_CATEGORIES.FOREIGN_LANGUAGES]: 7,
};

export const SKILLS_DATA = [
  // === Core Skills ===
  {
    Icon: FaReact,
    name: 'React',
    persent: 95,
    category: SKILL_CATEGORIES.CORE_SKILL,
  },
  {
    Icon: SiNextdotjs,
    name: 'Next.js',
    persent: 80,
    category: SKILL_CATEGORIES.CORE_SKILL,
  },
  {
    Icon: FaHtml5,
    name: 'HTML5',
    persent: 100,
    category: SKILL_CATEGORIES.CORE_SKILL,
  },
  {
    Icon: SiCss3,
    name: 'CSS 3 / SCSS / SASS',
    persent: 95,
    category: SKILL_CATEGORIES.CORE_SKILL,
  },
  {
    Icon: SiJavascript,
    name: 'JavaScript',
    persent: 90,
    category: SKILL_CATEGORIES.CORE_SKILL,
  },
  {
    Icon: SiTypescript,
    name: 'TypeScript',
    persent: 75,
    category: SKILL_CATEGORIES.CORE_SKILL,
  },
  {
    Icon: SiTailwindcss,
    name: 'TailwindCss',
    persent: 80,
    category: SKILL_CATEGORIES.CORE_SKILL,
  },
  {
    Icon: FaVuejs,
    name: 'Vue',
    persent: 70,
    category: SKILL_CATEGORIES.CORE_SKILL,
  },

  // === UI Libraries ===
  {
    Icon: SiChakraui,
    name: 'Chakra ui',
    persent: 90,
    category: SKILL_CATEGORIES.UI_LIBRARIES,
  },
  {
    Icon: SiShadcnui,
    name: 'Shadcn ui',
    persent: 80,
    category: SKILL_CATEGORIES.UI_LIBRARIES,
  },
  {
    Icon: SiAntdesign,
    name: 'Ant design',
    persent: 70,
    category: SKILL_CATEGORIES.UI_LIBRARIES,
  },
  {
    Icon: SiMui,
    name: 'Mui',
    persent: 50,
    category: SKILL_CATEGORIES.UI_LIBRARIES,
  },

  // === State Management ===
  {
    Icon: SiRedux,
    name: 'Redux',
    persent: 95,
    category: SKILL_CATEGORIES.STATE_MANAGEMENT,
  },
  {
    Icon: RiBearSmileFill,
    name: 'Zustand',
    persent: 80,
    category: SKILL_CATEGORIES.STATE_MANAGEMENT,
  },
  {
    Icon: SiRedux,
    name: 'Redux Toolkit',
    persent: 75,
    category: SKILL_CATEGORIES.STATE_MANAGEMENT,
  },

  // === Testing libraries ===
  {
    Icon: SiJest,
    name: 'Jest',
    persent: 70,
    category: SKILL_CATEGORIES.TESTING_LIBRARIES,
  },
  {
    Icon: SiTestinglibrary,
    name: 'Testing library',
    persent: 65,
    category: SKILL_CATEGORIES.TESTING_LIBRARIES,
  },

  // === Bundlers and tools ===
  {
    Icon: SiVite,
    name: 'Vite',
    persent: 70,
    category: SKILL_CATEGORIES.BUNDLERS_AND_TOOLS,
  },
  {
    Icon: FaNpm,
    name: 'NPM',
    persent: 65,
    category: SKILL_CATEGORIES.BUNDLERS_AND_TOOLS,
  },
  {
    Icon: SiGit,
    name: 'Git',
    persent: 80,
    category: SKILL_CATEGORIES.BUNDLERS_AND_TOOLS,
  },

  // === Other Tech ===
  {
    Icon: SiJquery,
    name: 'Jquery',
    persent: 50,
    category: SKILL_CATEGORIES.OTHER_TECH,
  },
  {
    Icon: SiNodedotjs,
    name: 'Node.js',
    persent: 50,
    category: SKILL_CATEGORIES.OTHER_TECH,
  },
  {
    Icon: SiGraphql,
    name: 'GraphQL',
    persent: 40,
    category: SKILL_CATEGORIES.OTHER_TECH,
  },

  // === Languages ===
  {
    customEmoji: '🇺🇦',
    name: 'Ukraine',
    level: 'C2',
    persent: 100,
    category: SKILL_CATEGORIES.FOREIGN_LANGUAGES,
  },
  {
    customEmoji: '🇺🇸',
    name: 'English',
    level: 'B1',
    persent: 60,
    category: SKILL_CATEGORIES.FOREIGN_LANGUAGES,
  },
  {
    customEmoji: '🇵🇱',
    name: 'Polish',
    level: 'A2',
    persent: 35,
    category: SKILL_CATEGORIES.FOREIGN_LANGUAGES,
  },
];

export const COMMERCIAL_PROJECTS = [
  {
    id: 1,
    title: 'GALAFARM 💊',
    description:
      'GALAFARM is a Ukrainian pharmacy network with an online service. It features a medicine catalog, online ordering with delivery, and a well-organized search with filters for quick product selection. The project combines a user-friendly UX with up-to-date product information.',
    img: images.galafarm,
    linkToDemo: 'http://galafarm.com.ua/',
  },
  {
    id: 2,
    title: 'Moralia ✨',
    description:
      'Moralia is a Canadian brand of modern furniture and interior solutions. The website showcases stylish, functional products for home and office, combining aesthetics with practicality.',
    img: images.moralia,
    linkToDemo: 'https://moralia.ca/',
  },
  {
    id: 3,
    title: 'EYE COMMS 🌟',
    description:
      'EYE COMMS is a Ukrainian creative marketing communications agency that combines freedom of thought, creativity, and national values with innovative digital solutions, transforming Ukrainian creativity into part of global cultural diversity.',
    img: images.eyeComms,
    linkToDemo: 'https://eye-c.com.ua/',
  },
  {
    id: 4,
    title: 'Fankota 🧸',
    description:
      'Fankota is a Ukrainian online store specializing in Funko Pop figures and collectible items. The website offers a wide range of characters from comics, anime, movies, and TV series, with a regularly updated catalog and fast, reliable delivery.',
    img: images.fankota,
    linkToDemo: 'https://fankota.com.ua/',
  },
];

export const PET_PROJECTS = [
  {
    id: 1,
    title: 'Socially 👥',
    description:
      'Socially is a personal pet project that replicates the basic features of social networks. Users can create posts, like and comment on them, and authenticate via Clerk. The project demonstrates practical use of React, Next.js, modern UI libraries, and state management techniques.',
    img: images.socially,
    linkToGitHub: 'https://github.com/Dima-Semenov/socially',
    linkToDemo: 'https://mysocially.vercel.app/',
  },
  {
    id: 2,
    title: 'Todo app 📋',
    description:
      'Todo app is a simple and user-friendly tool for organizing tasks and keeping everything under control. The app allows you to create, edit, and delete tasks, set priorities and statuses, track progress, and manage deadlines. With its intuitive interface and well-structured page layout, you can quickly plan your day, boost productivity, and achieve your goals.',
    img: images.todo_app,
    linkToGitHub: 'https://github.com/Dima-Semenov/next-todo-app',
    linkToDemo: 'https://next-todo-app-three-pi.vercel.app/',
  },
  {
    id: 3,
    title: 'Rick and Morty 🧪',
    description:
      'A simple site about the Rick and Morty cartoon. The site includes three separate pages: a page about all the characters of the cartoon, a page about all the locations where the events take place, and a page about all the episodes of the cartoon.',
    img: images.rick_and_morty,
    linkToGitHub: 'https://github.com/Dima-Semenov/rick_and_morty/tree/develop',
    linkToDemo: 'https://dima-semenov.github.io/rick_and_morty/',
  },
  {
    id: 4,
    title: 'Miami Condo Kings 🏙️',
    description: 'Landing site for a real estate company',
    img: images.maimi,
    linkToGitHub: 'https://github.com/Dima-Semenov/miami',
    linkToDemo: 'https://Dima-Semenov.github.io/layout_miami/',
  },
];

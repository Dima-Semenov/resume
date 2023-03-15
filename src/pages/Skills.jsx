import { FaReact, FaHtml5, FaNpm, FaVuejs } from 'react-icons/fa';
import { DiCss3, DiJavascript1, DiSass } from 'react-icons/di';
import {
  SiTypescript,
  SiRedux,
  SiVite,
  SiTailwindcss,
  SiGraphql,
  SiJest,
} from 'react-icons/si';
import { Title } from '../components';
import { useState } from 'react';
import { IoFlag } from 'react-icons/io5';

const icon = [
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
  // {
  //   Icon: IoFlag,
  //   name: 'English',
  //   persent: 50,
  // },
  // {
  //   Icon: IoFlag,
  //   name: 'Ukraine',
  //   persent: 100,
  // },
];

const Skills = () => {
  const [currentSkill, setCurrentSkill] = useState(75);
  const [selectedSkill, setSelectedSkill] = useState(icon[0]);

  return (
    <section id='skills'>
      <Title>Skills</Title>

      <div className='pt-10 gap-10 items-center'>
        <div className='grid grid-cols-4 gap-4 pb-10'>
          {icon
            .sort((a, b) => b.persent - a.persent)
            .map((item) => (
              <button
                key={item.name}
                onClick={() => setSelectedSkill(item)}
                className={`p-2 px-4 gap-2 uppercase border-primary border-2 font-openSans whitespace-nowrap h-fit text-sm items-center rounded-md font-semibold flex ${
                  selectedSkill.name === item.name
                    ? 'bg-primary text-white'
                    : 'bg-white text-primary  '
                }`}
              >
                <div>
                  <item.Icon className='w-6 h-6' />
                </div>
                {item.name}
              </button>
            ))}
        </div>

        <div
          className='flex items-center justify-center'
          x-data='{ circumference: 2 * 22 / 7 * 120 }'
        >
          <svg className='transform -rotate-90 w-72 h-72'>
            <circle
              cx='145'
              cy='145'
              r='120'
              stroke='currentColor'
              strokeWidth='30'
              fill='transparent'
              className='text-white'
            />

            <circle
              cx='145'
              cy='145'
              r='120'
              stroke='currentColor'
              strokeWidth='30'
              fill='transparent'
              strokeDasharray={((2 * 22) / 7) * 120}
              strokeDashoffset={
                ((2 * 22) / 7) * 120 -
                (((selectedSkill.persent / 100) * 2 * 22) / 7) * 120
              }
              className='text-primary duration-300'
            />
          </svg>
          <span className='absolute flex flex-col items-center gap-4 text-5xl text-primary font-semibold'>
            <selectedSkill.Icon className='w-14 h-14' />
            {selectedSkill.persent + '%'}
          </span>
        </div>
      </div>

      {/* <div className='flex gap-20 flex-wrap'>
        {icon.map((item) => (
          <div className='flex items-center flex-wrap w-fit px-10 bg-primary shadow-xl rounded-2xl h-20'>
            <div className='flex items-center justify-center -m-6 overflow-hidden bg-primary rounded-full'>
              <svg
                className='w-32 h-32 transform translate-x-1 translate-y-1'
                x-cloak
                aria-hidden='true'
              >
                <circle
                  className='text-white0.5'
                  stroke-width='10'
                  stroke='currentColor'
                  fill='transparent'
                  r='50'
                  cx='60'
                  cy='60'
                />
                <circle
                  className='text-white'
                  stroke-width='10'
                  stroke-dasharray={50 * 2 * Math.PI}
                  stroke-dashoffset={
                    50 * 2 * Math.PI - (item.persent / 100) * 50 * 2 * Math.PI
                  }
                  stroke-linecap='round'
                  stroke='currentColor'
                  fill='transparent'
                  r='50'
                  cx='60'
                  cy='60'
                />
              </svg>
              <span className='absolute text-2xl text-blue-700'>
                <item.Icon className='w-14 h-14 text-white' />
              </span>
            </div>
            <div className='ml-10 font-medium text-white sm:text-xl'>
              <p className='text-3xl'>{item.name}</p>
              <p className='font-bold'>{item.persent}%</p>
            </div>
          </div>
        ))}
      </div> */}

      {/* <div className='flex flex-col gap-6'>
        {icon.map((item) => (
          <div>
            <div class='flex justify-between mb-1'>
              <span class='text-xl font-bold text-primary dark:text-white flex gap-4 items-center'>
                <item.Icon className='w-10 h-10' />
                {item.name}
              </span>
              <span class='text-sm font-medium text-blue-700 dark:text-white'>
                100%
              </span>
            </div>
            <div class='w-full bg-gray-200 rounded-full dark:bg-gray-700'>
              <div
                class='bg-primary text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full'
                style={{ width: `${item.persent}%` }}
              >
                {item.persent}%
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default Skills;

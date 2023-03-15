import { Title } from '../components';
import rick_and_morty from '../assets/rick_and_morty.png';
import maimi from '../assets/miami.png';
import currency_converter from '../assets/currency_converter.png';
import parallax from '../assets/parallax.png';

import { BiWindowOpen } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';

const DATA = [
  {
    id: 1,
    title: 'Rick and Morty',
    description:
      'A simple site about the Rick and Morty cartoon. The site includes three separate pages: a page about all the characters of the cartoon, a page about all the locations where the events take place, and a page about all the episodes of the cartoon.',
    img: rick_and_morty,
    linkToGitHub: 'https://github.com/Dima-Semenov/rick_and_morty/tree/develop',
    linkToDemo: 'https://dima-semenov.github.io/rick_and_morty/',
  },
  {
    id: 2,
    title: 'Miami Condo Kings',
    description: 'Landing site for a real estate company',
    img: maimi,
    linkToGitHub: 'https://github.com/Dima-Semenov/miami',
    linkToDemo: 'https://Dima-Semenov.github.io/layout_miami/',
  },
  {
    id: 3,
    title: 'Currency Converter',
    description:
      'Site for currency conversion. Through the API, the current exchange rate is obtained and calculated according to the selected currencies. Counts more than 200 currencies',
    img: currency_converter,
    linkToGitHub: 'https://github.com/Dima-Semenov/Currency-Converter',
    linkToDemo: 'https://currency-exchange-demo.netlify.app/',
  },
  {
    id: 4,
    title: 'Fairy Forest',
    description: 'A simple site with a parallax effect',
    img: parallax,
    linkToGitHub: 'https://github.com/Dima-Semenov/Parallax_effect',
    linkToDemo: 'https://parallax-effect-demo-deploy.netlify.app/',
  },
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <Title>Portfolio</Title>

      <div className='flex flex-wrap gap-8 pt-8'>
        {DATA.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

const Card = ({ title, description, img, linkToGitHub, linkToDemo }) => (
  <div className='bg-white border border-gray-200 rounded-lg overflow-hidden max-w-[300px] w-full'>
    <div className='max-h-[130px] overflow-hidden'>
      <img className='w-full object-cover object-top' src={img} alt='' />
    </div>
    <div className='py-3 px-2 h-[calc(100%-130px)] flex flex-col justify-between'>
      <div>
        <h5 className='mb-2 text-xl font-bold font-openSans text-black'>
          {title}
        </h5>
        <p className='mb-3 font-medium text-silver-light font-openSans text-sm'>
          {description}
        </p>
      </div>
      <div className='flex justify-between'>
        <a
          href={linkToDemo}
          target='_blank'
          className='flex gap-1 items-center border-2 border-primary text-primary rounded-md p-1 uppercase font-openSans font-bold text-sm'
        >
          <BiWindowOpen className='w-6 h-6' />
          Open demo
        </a>
        <a
          href={linkToGitHub}
          target='_blank'
          className='flex gap-1 items-center border-2 border-primary text-primary rounded-md p-2 uppercase font-openSans font-bold text-sm'
        >
          <FaGithub className='w-6 h-6' />
          Open code
        </a>
      </div>
    </div>
  </div>
);

export default Portfolio;

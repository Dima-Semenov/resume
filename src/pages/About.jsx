import { CONTACT_DETAILS } from '../utils/constants';

const About = () => (
  <section id='about' className='justify-center'>
    <h1 className='font-bold text-8xl uppercase text-silver'>
      Semenov <span className='text-primary'>Dmytro</span>
    </h1>
    <h3 className='font-bold text-5xl uppercase text-silver'>
      Frond-end <span className='text-primary'>developer</span>
    </h3>
    <div className='text-silver-light pb-12 text-base pt-4'>
      {CONTACT_DETAILS.map((item) => (
        <div
          className='group flex gap-2 items-center cursor-pointer w-max duration-300'
          key={item.id}
        >
          <item.Icon className='w-5 h-5 group-hover:text-primary group-hover:scale-125 duration-300' />
          <a
            href={item.link}
            target={item.target}
            className='group-hover:text-primary'
          >
            {item.label}
          </a>
        </div>
      ))}
    </div>
    <div className='text-base font-medium uppercase font-openSans text-silver-light'>
      <p>
        I'm a Frontend developer with 2 years of experience. I have successful
        experience in developing web applications as part of both Ukrainian and
        international teams.
      </p>
      <p className='py-2'>
        I have a strong command of JavaScript / TypeScript, React.js / Redux,
        and related experience in the industry. My areas of expertise also
        include setting up and developing automated tests, such as Jest, website
        performance optimization, and much more that you can find in my CV.
      </p>
      <p>
        Also I persistent, responsible, quick learner and open to learning any
        technology.
      </p>
    </div>
  </section>
);

export default About;

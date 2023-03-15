import { useEffect } from 'react';
import logo from '../assets/2.jpg';
import { MENU, SOCIAL_MEDIA } from '../utils/constants';

const scrollActive = () => {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');

    const currentNavLink = document.querySelector(`a[href*=${sectionId}]`);
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      currentNavLink.parentElement.classList.remove('text-white0.5');
    } else {
      currentNavLink.parentElement.classList.add('text-white0.5');
    }
  });
};

const Nav = () => {
  useEffect(() => {
    scrollActive();
    window.addEventListener('scroll', scrollActive);
  }, []);

  return (
    <nav className='w-64 fixed top-0 bottom-0 left-0 h-full bg-primary px-4 py-24 flex items-center flex-col tablet:w-full tablet:h-14 tablet:p-2 tablet:items-start'>
      <div className='pb-10 flex flex-col items-center tablet:flex-row tablet:p-0 tablet:gap-2 tablet:w-full'>
        <div className='tablet:w-14 tablet:h-10'>
          <img
            src={logo}
            className='w-40 h-40 rounded-full object-cover border-8 border-white0.2 tablet:w-10 tablet:h-10 tablet:border-4 tablet:p-0'
          />
        </div>
        <h3 className='font-bold text-3xl uppercase whitespace-nowrap text-white text-center pt-2 tablet:p-0'>
          Dmytro <span className='text-silver'>Semenov</span>
        </h3>
        <SocialMedia />
      </div>

      <div className='w-full flex tablet:fixed tablet:bottom-4 tablet:left-2/4 tablet:-translate-x-2/4 tablet:bg-primary tablet:w-min tablet:p-2 tablet:rounded-full'>
        <ul className='w-full tablet:flex tablet:gap-2'>
          {MENU.map(({ title, Icon }) => (
            <li
              key={title}
              className='group p-2 text-white font-openSans duration-300 uppercase font-semibold cursor-pointer'
            >
              <a
                href={`#${title}`}
                className='duration-300 w-full flex gap-3 items-center group-hover:scale-105 group-hover:text-white group-hover:pl-1'
              >
                <Icon className='w-5 h-5 duration-300 group-hover:scale-125 group-hover:text-white' />
                <span className='tablet:hidden'>{title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

const SocialMedia = () => (
  <div className='flex gap-2 pt-2 tablet:p-0 tablet:w-full tablet:justify-end'>
    {SOCIAL_MEDIA.map(({ Icon, link }, index) => (
      <a
        key={link + index}
        href={link}
        target='_blank'
        className='w-8 h-8 rounded-full flex justify-center items-center bg-white0.7 cursor-pointer duration-300 hover:bg-white hover:scale-125'
      >
        <Icon className='w-5 h-5 text-primary' />
      </a>
    ))}
  </div>
);

export default Nav;
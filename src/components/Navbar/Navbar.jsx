import { useEffect } from 'react';
import styles from './styles.module.css';
import Title from '../Title';
import { MenuList, SocialMedia } from './components';
import { images, scrollActive } from '../../utils';

const Nav = () => {
  useEffect(() => {
    scrollActive();
    window.addEventListener('scroll', scrollActive);
  }, []);

  return (
    <nav className={styles.nav}>
      <div className={styles.block}>
        <div className={styles.imgBlock}>
          <img src={images.avatar} className={styles.img} />
        </div>
        <Title
          size='text-3xl mobileSmall:text-xl'
          additionalClass='whitespace-nowrap text-white text-center pt-2 tablet:p-0'
        >
          Dmytro <span className='text-silver'>Semenov</span>
        </Title>
        <SocialMedia />
      </div>

      <div className={styles.menuBlock}>
        <MenuList />
      </div>
    </nav>
  );
};

export default Nav;

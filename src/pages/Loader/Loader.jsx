import { motion } from 'framer-motion';
import styles from './styles.module.css';
import { AnimatedText } from '../../components';

const LoaderProgres = () => (
  <motion.div
    animate={{ scale: [1, 0] }}
    transition={{ duration: 0.5, delay: 2.5 }}
    initial={{ scale: 1 }}
    className={styles.container}
  >
    <span className={styles.span}>
      <span className={styles.loader} />
    </span>
  </motion.div>
);

const Loader = () => (
  <div className='h-screen flex justify-center items-center flex-col absolute w-full top-0 left-0 right-0 bottom-0 overflow-hidden'>
    <motion.div
      className='pb-28 tablet:p-16 mobileSmall:p-10'
      initial={{ x: 0, opacity: 1 }}
      animate={{ x: '-100vw', opacity: 0 }}
      transition={{
        duration: 1,
        delay: 2,
        ease: 'easeInOut',
      }}
    >
      <AnimatedText
        text='Resume'
        additionClass='!text-8xl tablet:!text-7xl mobileSmall:!text-5xl'
      />
    </motion.div>

    <LoaderProgres />

    <motion.div
      initial={{ x: 0, opacity: 1 }}
      animate={{ x: '100vw', opacity: 0 }}
      transition={{
        duration: 1,
        delay: 2,
        ease: 'easeInOut',
      }}
    >
      <div className='flex gap-6 pt-9'>
        <AnimatedText text='Semenov' />
        <AnimatedText text='Dmytro' additionClass='!text-primary' />
      </div>
    </motion.div>
  </div>
);

export default Loader;

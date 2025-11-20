import { useState } from 'react';
import { motion } from 'framer-motion';
import { BiWindowOpen } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
import { TbHandClick } from 'react-icons/tb';
import styles from './styles.module.css';

const Card = ({
  title,
  description,
  img,
  linkToGitHub = null,
  linkToDemo,
  index,
}) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className={styles.container}
      onClick={() => setFlipped(!flipped)}
      onMouseLeave={() => setFlipped(false)}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        delay: index * 0.1,
      }}
    >
      {/* FRONT */}
      <motion.div
        className={`${styles.cardContainer} ${styles.front}`}
        animate={{
          rotateX: flipped ? 180 : 0,
          opacity: flipped ? 0 : 1,
        }}
        transition={{
          duration: 0.6,
          ease: [0.2, 0.8, 0.2, 1],
        }}
        style={{
          backfaceVisibility: 'hidden',
          position: 'absolute',
        }}
      >
        <img className={styles.img} src={img} alt='logo' loading='lazy' />

        <div className={styles.hoverBlock}>
          <h5 className={styles.title}>{title}</h5>
          <span className={styles.subTitle}>Click to show more details</span>

          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [1, 0.85, 1],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ display: 'inline-block' }}
          >
            <TbHandClick size={50} />
          </motion.div>
        </div>
      </motion.div>

      {/* BACK */}
      <motion.div
        className={`${styles.cardContainer} ${styles.back}`}
        animate={{
          rotateX: flipped ? 0 : -180,
          opacity: flipped ? 1 : 0,
        }}
        transition={{
          duration: 0.6,
          ease: [0.2, 0.8, 0.2, 1],
        }}
        style={{
          backfaceVisibility: 'hidden',
          position: 'absolute',
        }}
      >
        <div className={styles.wrapper}>
          <h5 className={styles.title1}>{title}</h5>
          <p className={styles.description}>{description}</p>

          <div className={styles.block}>
            <a
              href={linkToDemo}
              target='_blank'
              className={styles.link}
              aria-label='Link to open site'
            >
              <BiWindowOpen className={styles.icon} />
              Open demo
            </a>
            {linkToGitHub && (
              <a
                href={linkToGitHub}
                target='_blank'
                className={styles.link}
                aria-label='Link to open code'
              >
                <FaGithub className={styles.icon} />
                Open code
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card;

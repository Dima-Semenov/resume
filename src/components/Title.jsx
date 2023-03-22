import classNames from 'classnames';
import { motion } from 'framer-motion';

const Title = ({
  children,
  additionalClass,
  variant: Variant = 'h2',
  size = 'text-6xl mobileVerySmall:text-5xl',
}) => {
  return (
    <motion.div
      whileInView={{ x: 0, opacity: [0, 0.5, 1] }}
      transition={{ duration: 0.5 }}
      initial={{ x: '-100%' }}
    >
      <Variant
        className={classNames(
          'font-bold uppercase text-silver',
          additionalClass,
          size
        )}
      >
        {children}
      </Variant>
    </motion.div>
  );
};

export default Title;

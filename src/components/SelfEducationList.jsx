import { motion } from 'framer-motion';
import { SELF_EDUCATION_DATA } from '../utils';

const SelfEducationList = ({ }) => (
  <ul className='pl-8 list-disc uppercase text-silver-light text-xl font-medium'>
    {SELF_EDUCATION_DATA.map(({ title, id }, index) => (
      <motion.li
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: index * 0.2, ease: 'easeInOut' }}
        initial={{ opacity: 0, y: 20 }}
        key={id}
      >
        {title}
      </motion.li>
    ))}
  </ul>
);

export default SelfEducationList;

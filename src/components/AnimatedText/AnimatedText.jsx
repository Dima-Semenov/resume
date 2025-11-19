import { useMemo, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedText = ({ text, additionClass = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const letters = useMemo(() => {
    return text.split('').map((char) => {
      const directions = [-1, 1];
      const x =
        directions[Math.floor(Math.random() * 2)] * (10 + Math.random() * 20);
      const y =
        directions[Math.floor(Math.random() * 2)] * (10 + Math.random() * 20);
      const delay = Math.random() * 1;
      return { char, x, y, delay };
    });
  }, [text]);

  return (
    <div ref={ref} style={{ display: 'flex', gap: '2px', flexWrap: 'wrap' }}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, x: letter.x, y: letter.y, scale: 0.8 }}
          animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1 } : {}}
          transition={{ delay: letter.delay, duration: 0.5 }}
          className={`${additionClass} font-bold uppercase text-silver text-7xl tablet:text-6xl mobileSmall:text-5xl`}
        >
          {letter.char}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedText;

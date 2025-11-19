import { useEffect, useState, useRef } from 'react';
import { useMotionValue, animate, useInView } from 'framer-motion';

const AnimatedNumber = ({ from = 0, to = 100, duration = 2 }) => {
  const motionValue = useMotionValue(from);
  const [number, setNumber] = useState(from);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, to, {
        duration: duration,
        onUpdate: (latest) => setNumber(Math.round(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, to, duration, motionValue]);

  return <span ref={ref}>{number}</span>;
};

export default AnimatedNumber;

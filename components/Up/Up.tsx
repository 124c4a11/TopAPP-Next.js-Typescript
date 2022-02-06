import { motion, useAnimation } from 'framer-motion';

import styles from './Up.module.css';
import ArrowIcon from './arrow.svg';
import { useScrollY } from '../../hooks/useScrollY';
import { useEffect } from 'react';

export const Up = (): JSX.Element => {
  const y = useScrollY();
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: y / document.body.scrollHeight });
  }, [y, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      animate={controls}
      initial={{ opacity: 0 }}
      className={styles['btn']}
      onClick={scrollToTop}
    ><ArrowIcon /></motion.button>
  );
};

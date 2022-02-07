import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

import styles from './Up.module.css';
import { useScrollY } from '../../hooks/useScrollY';
import { ButtonIcon } from '..';

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
    <motion.div
      animate={controls}
      initial={{ opacity: 0 }}
      className={styles['up']}
    >
      <ButtonIcon
        icon='up'
        onClick={scrollToTop}
      />
    </motion.div>
  );
};

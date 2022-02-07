import cn from 'classnames';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import styles from './Header.module.css';
import Logo from '../logo.svg';
import { IHeaderProps } from './Header.props';
import { ButtonIcon } from '../../components';
import { Sidebar } from '../Sidebar/Sidebar';
import { useEffect, useState } from 'react';

export const Header = ({ className, ...props }: IHeaderProps): JSX.Element => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setIsOpened(false);
  }, [router]);

  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: { stiffness: 20 },
    },

    closed: {
      opacity: 0,
      x: '100%',
    }
  };

  return (
    <header
      className={cn(className, styles['header'])}
      {...props}
    >
      <Logo />
      <ButtonIcon
        appearance='white'
        icon='burger'
        onClick={() => setIsOpened(true)}
      />
      <motion.div
        className={styles['mobile-menu']}
        variants={variants}
        initial={'closed'}
        animate={isOpened ? 'opened' : 'closed'}
      >
        <Sidebar />
        <ButtonIcon
          className={styles['mobile-menu-btn']}
          appearance='white'
          icon='close'
          onClick={() => setIsOpened(false)}
        />
      </motion.div>
    </header>
  );
};

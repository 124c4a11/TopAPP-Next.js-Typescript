import cn from 'classnames';

import styles from './P.module.css';
import { IPProps } from './P.props';

export const P = ({ size = 'md', children, className, ...props }: IPProps): JSX.Element => {
  const pClassName = cn(
    styles.p,
    className,
    {
      [styles['p-sm']]: size === 'sm',
      [styles['p-md']]: size === 'md',
      [styles['p-lg']]: size === 'lg',
    }
  );

  return <p className={pClassName} {...props}>{children}</p>;
};

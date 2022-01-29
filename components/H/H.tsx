import cn from 'classnames';

import { IHtagProps } from './H.props';
import styles from './H.module.css';

export const H = ({ tag = 'h1', children, className, ...props }: IHtagProps): JSX.Element => {
  const Tag = tag;

  const hClassName = cn(
    styles[tag],
    className,
  );

  return <Tag className={hClassName} {...props}>{children}</Tag>;
};

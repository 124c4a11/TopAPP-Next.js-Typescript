import { IHtagProps } from './H.props';
import styles from './H.module.css';

export const H = ({ tag = 'h1', children }: IHtagProps): JSX.Element => {
  const Tag = tag;

  return <Tag className={styles[tag]}>{children}</Tag>;
};

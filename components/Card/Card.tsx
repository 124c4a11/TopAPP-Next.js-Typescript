import cn from 'classnames';

import styles from './Card.module.css';
import { ICardProps } from './Card.props';

export const Card = ({
  color = 'white',
  className,
  children,
  ...props
}: ICardProps) => {
  const cardClassName = cn(
    styles.card,
    className,
    {
      [styles['card-white']]: color === 'white',
      [styles['card-blue']]: color === 'blue',
    }
  );

  return (
    <div className={cardClassName} {...props}>{children}</div>
  );
};

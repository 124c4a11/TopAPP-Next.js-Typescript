import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';

import styles from './Card.module.css';
import { ICardProps } from './Card.props';

export const Card = forwardRef(
  (
    {
      color = 'white',
      className,
      children,
      ...props
    }: ICardProps,
    ref: ForwardedRef<HTMLDivElement>,
  ): JSX.Element => {
    const cardClassName = cn(
      styles.card,
      className,
      {
        [styles['card-white']]: color === 'white',
        [styles['card-blue']]: color === 'blue',
      }
    );

    return (
      <div className={cardClassName} ref={ref} {...props}>{children}</div>
    );
  }
);

import cn from 'classnames';

import styles from './Button.module.css';
import { IButtonProps } from './Button.props';
import ArrowIcon from './arrow.svg';

export const Button = ({ appearance = 'primary', arrow = 'none', children, className, ...props }: IButtonProps): JSX.Element => {
  const btnClassName = cn(
    styles.btn,
    className,
    {
      [styles['btn-primary']]: appearance === 'primary',
      [styles['btn-ghost']]: appearance === 'ghost',
    }
  );

  const arrowClassName = cn(
    styles.arrow,
    {
      [styles['arrow-down']]: arrow === 'down',
    }
  );

  return <button className={btnClassName} {...props}>
    {children}
    {arrow !== 'none' && <span className={arrowClassName}><ArrowIcon /></span>}
  </button>;
};

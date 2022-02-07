import cn from 'classnames';

import styles from './ButtonIcon.module.css';
import { IButtonIconProps, icons } from './ButtonIcon.props';

export const ButtonIcon = ({
  appearance = 'primary',
  className,
  icon,
  ...props
}: IButtonIconProps): JSX.Element => {
  const btnClassName = cn(
    styles.btn,
    className,
    {
      [styles['btn-primary']]: appearance === 'primary',
      [styles['btn-white']]: appearance === 'white',
    }
  );

  const Icon = icons[icon];

  return (
    <button className={btnClassName} {...props}>
      <Icon />
    </button>
  );
};

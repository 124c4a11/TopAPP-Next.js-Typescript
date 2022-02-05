import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';

import styles from './Input.module.css';
import { IInputProps } from './Input.props';

export const Input = forwardRef(
  (
    { className, error, ...props }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ): JSX.Element => (
    <div className={className}>
      <input
        className={cn(
          styles['input'],
          {
            [styles['input-error']]: error
          }
        )}
        ref={ref}
        {...props}
      />
      {
        error &&
        <div className={styles['error-msg']}>{error.message}</div>
      }
    </div>
  )
);

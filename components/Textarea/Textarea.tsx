import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';

import styles from './Textarea.module.css';
import { ITextareaProps } from './Textarea.props';

export const Textarea = forwardRef(
  (
    { className, error, ...props }: ITextareaProps,
    ref: ForwardedRef<HTMLTextAreaElement>,
  ): JSX.Element => (
    <div className={className}>
      <textarea
        className={cn(
          styles['textarea'],
          {
            [styles['textarea-error']]: error
          }
        )}
        ref={ref}
        {...props}
      />
      {
        error &&
        <div className={styles['error-msg']} role='alert'>{error.message}</div>
      }
    </div>
  )
);

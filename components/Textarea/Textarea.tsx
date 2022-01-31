import cn from 'classnames';

import styles from './Textarea.module.css';
import { ITextareaProps } from './Textarea.props';

export const Textarea = ({ className, ...props }: ITextareaProps) => (
  <textarea className={cn(className, styles['textarea'])} {...props} />
);

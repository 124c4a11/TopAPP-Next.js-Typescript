import cn from 'classnames';

import styles from './Tag.module.css';
import { ITagDivProps, ITagAnchorProps } from './Tag.props';

export const Tag = ({
  size = 'md',
  color = 'ghost',
  className,
  href,
  children,
  ...props
}: ITagDivProps): JSX.Element => {
  const tagClassName = cn(
    styles.tag,
    className,
    {
      [styles['tag-sm']]: size === 'sm',
      [styles['tag-md']]: size === 'md',
      [styles['tag-ghost']]: color === 'ghost',
      [styles['tag-gray']]: color === 'gray',
      [styles['tag-red']]: color === 'red',
      [styles['tag-green']]: color === 'green',
      [styles['tag-primary']]: color === 'primary',
    }
  );

  return href
    ? <a className={tagClassName} href={href} {...props as ITagAnchorProps}>{children}</a>
    : <div className={tagClassName} {...props}>{children}</div>;
};

import cn from 'classnames';

import { Tag } from '..';
import styles from './TagList.module.css';
import { ITagListProps } from './TagList.props';

export const TagList = ({ tags, size = 'md', color = 'primary' }: ITagListProps) => {
  const itemClassName = cn(
    {
      [styles['tag-list-item-sm']]: size === 'sm',
      [styles['tag-list-item-md']]: size === 'md',
    }
  );

  return (
    <ul className={styles['tag-list']}>
      {tags.map((item) => (
        <li className={itemClassName} key={item}>
          <Tag color={color} size={size}>{item}</Tag>
        </li>
      ))}
    </ul>
  );
};

import { Tag } from '..';
import styles from './TagList.module.css';
import { ITagListProps } from './TagList.props';

export const TagList = ({ tags }: ITagListProps) => (
  <ul className={styles['tag-list']}>
    {tags.map((item) => (
      <li className={styles['tag-list-item']} key={item}>
        <Tag color='primary'>{item}</Tag>
      </li>
    ))}
  </ul>
);

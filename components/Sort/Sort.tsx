import cn from 'classnames';

import styles from './Sort.module.css';
import SortIcon from './sort.svg';
import { ISortProps, SortEnum } from './Sort.props';

export const Sort = ({ sort, setSort, className, ...props }: ISortProps) => (
  <div className={cn(styles['sort'], className)} {...props}>
    <button
      onClick={() => setSort(SortEnum.Rating)}
      className={cn(
        styles['btn'],
        {
          [styles['btn-active']]: sort === SortEnum.Rating
        }
      )}
    ><SortIcon className={styles['btn-icon']} />По рейтингу</button>

    <button
      onClick={() => setSort(SortEnum.Price)}
      className={cn(
        styles['btn'],
        {
          [styles['btn-active']]: sort === SortEnum.Price
        }
      )}
    ><SortIcon className={styles['btn-icon']} />По цене</button>
  </div>
);

import cn from 'classnames';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

import styles from './Review.module.css';
import UserIcon from './user.svg';
import { IReviewProps } from './Review.props';
import { Rating } from '..';

export const Review = ({ review, className, ...props }: IReviewProps) => {
  return (
    <div className={cn(styles['review'], className)} {...props}>
      <UserIcon />
      <div className={styles['title']}>
        <span className={styles['name']}>{review.name}:</span>
        <span>{review.title}</span>
      </div>
      <div className={styles['date']}>
        {format(new Date(review.createdAt), 'dd MMMM yyyy', { locale: ru })}
      </div>
      <Rating className={styles['review-rating']} rating={review.rating} />
      <div className={styles['description']}>{review.description}</div>
    </div>
  );
};

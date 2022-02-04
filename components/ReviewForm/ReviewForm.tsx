import cn from 'classnames';

import styles from './ReviewForm.module.css';
import CloseIcon from './close.svg';
import { IReviewFormProps } from './ReviewForm.props';
import { Button, Input, P, Rating, Textarea } from '..';

export const ReviewForm = ({ productId, className, ...props }: IReviewFormProps) => {
  return (
    <>
      <form className={cn(styles['form'], className)} {...props}>
        <Input className={styles['input']} placeholder='Имя' />
        <Input className={styles['input']} placeholder='Заголовок отзыва' />
        <div className={styles['rating']}>
          <span>Оценка: </span>
          <Rating rating={0} isEditable />
        </div>
        <Textarea className={styles['textarea']} placeholder='Текст отзыва' />
        <div className={styles['form-footer']}>
          <Button>Отправить</Button>
          <P size='sm'>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</P>
        </div>
      </form>
      <div className={cn(styles['info'], styles['info-success'])}>
        <div className={styles['info-title']}>Ваш отзыв отправлен.</div>
        <P>Спасибо, ваш отзыв будет опубликован после проверки.</P>
        <button className={styles['info-close-btn']}>
          <CloseIcon />
        </button>
      </div>
    </>
  );
};

import cn from 'classnames';
import { useForm, Controller } from 'react-hook-form';

import styles from './ReviewForm.module.css';
import CloseIcon from './close.svg';
import { IReviewFormProps } from './ReviewForm.props';
import { Button, Input, P, Rating, Textarea } from '..';
import { IReviewForm } from './ReviewForm.interface';

export const ReviewForm = ({ productId, className, ...props }: IReviewFormProps): JSX.Element => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<IReviewForm>();

  const onSubmit = (data: IReviewForm) => {
    console.log(data);
  };

  return (
    <>
      <form
        className={cn(styles['form'], className)}
        onSubmit={handleSubmit(onSubmit)}
        {...props}
      >
        <Input
          {...register('name', {
            required: {
              value: true,
              message: 'Введите имя'
            }
          })}
          error={errors.name}
          className={styles['input']}
          placeholder='Имя'
        />
        <Input
          {...register('title', {
            required: {
              value: true,
              message: 'Введите заголовок'
            }
          })}
          error={errors.title}
          className={styles['input']}
          placeholder='Заголовок отзыва'
        />
        <div className={styles['rating']}>
          <span>Оценка: </span>
          <Controller
            control={control}
            name='rating'
            rules={
              {
                required: {
                  value: true,
                  message: 'Укажите рейтинг'
                }
              }
            }
            render={({ field }) => (
              <Rating
                rating={field.value}
                isEditable
                ref={field.ref}
                setRating={field.onChange}
                error={errors.rating}
              />
            )}
          />
        </div>
        <Textarea
          {...register('description', {
            required: {
              value: true,
              message: 'Введите описание'
            }
          })}
          error={errors.description}
          className={styles['textarea']}
          placeholder='Текст отзыва'
        />
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

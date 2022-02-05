import { useState } from 'react';
import cn from 'classnames';
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';

import styles from './ReviewForm.module.css';
import CloseIcon from './close.svg';
import { IReviewFormProps, IReviewSentResponce } from './ReviewForm.props';
import { Button, Input, P, Rating, Textarea } from '..';
import { IReviewForm } from './ReviewForm.interface';
import { API } from '../../helpers/api';

export const ReviewForm = ({ productId, className, ...props }: IReviewFormProps): JSX.Element => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IReviewForm>();

  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const onSubmit = async (formData: IReviewForm) => {
    try {
      const { data } = await axios.post<IReviewSentResponce>(API.review.createDemo, { ...formData, productId });

      if (data.message) {
        setIsSuccess(true);
        reset();
      } else {
        setError('Что-то пошло не так');
      }
    } catch (err) {
      if (axios.isAxiosError(err)) setError(err.message);
    }
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
      {
        isSuccess &&
        <div className={cn(styles['info'], styles['info-success'])}>
          <div className={styles['info-title']}>Ваш отзыв отправлен.</div>
          <P>Спасибо, ваш отзыв будет опубликован после проверки.</P>
          <button
            className={styles['info-close-btn']}
            onClick={() => setIsSuccess(false)}
          >
            <CloseIcon />
          </button>
        </div>
      }
      {
        error &&
        <div className={cn(styles['info'], styles['info-error'])}>
          <div className={styles['info-title']}>Ошибка</div>
          <P>Что-то пошло не так попробуйте обновить страницу</P>
          <button
            className={styles['info-close-btn']}
            onClick={() => setError(undefined)}
          >
            <CloseIcon />
          </button>
        </div>
      }
    </>
  );
};

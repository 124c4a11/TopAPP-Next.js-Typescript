import { useEffect, useState, KeyboardEvent, forwardRef, ForwardedRef } from 'react';
import cn from 'classnames';

import styles from './Rating.module.css';
import StarIcon from './star.svg';
import { IRatingProps } from './Rating.props';

export const Rating = forwardRef(
  (
    {
      rating,
      className,
      isEditable = false,
      setRating,
      error,
      tabIndex,
      ...props
    }: IRatingProps,
    ref: ForwardedRef<HTMLUListElement>
  ): JSX.Element => {
    const [ratingArr, setRatingArr] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
      constructRating(rating);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rating]);

    const constructRating = (currentRating: number) => {
      const updatedArr = ratingArr.map((item: JSX.Element, ndx: number) => {
        const starClassName = cn(
          styles.star,
          {
            [styles['star-filled']]: ndx < currentRating,
          }
        );

        return <StarIcon className={starClassName} />;
      });

      setRatingArr(updatedArr);
    };

    const changeDisplay = (i: number) => constructRating(i);

    const onClick = (i: number) => {
      if (!setRating) return;

      setRating(i);
    };

    const handleKey = (e: KeyboardEvent<HTMLUListElement>) => {
      if (!isEditable || !setRating) return;


      if (e.code === 'ArrowUp' || e.code === 'ArrowRight') {
        e.preventDefault();

        if (rating === 5) return;

        !rating ? setRating(1) : setRating(++rating);
      }

      if (e.code === 'ArrowDown' || e.code === 'ArrowLeft') {
        e.preventDefault();

        if (rating === 0) return;

        setRating(--rating);
      }
    };

    const ratingItemClassName = cn(
      styles['rating-item'],
      {
        [styles['rating-item-editable']]: isEditable
      }
    );

    return (
      <div className={className}>
        <ul className={cn(
          styles['rating'],
          {
            [styles['rating-error']]: error
          }
        )}
          ref={ref}
          {...props}
          tabIndex={isEditable ? tabIndex : -1}
          onKeyDown={(e: KeyboardEvent<HTMLUListElement>) => isEditable && handleKey(e)}
          role={isEditable ? 'slider' : ''}
          aria-valuemin={0}
          aria-valuemax={5}
          aria-valuenow={rating}
          aria-label={isEditable ? 'укажите рейтинг при помощи стрелок' : `рейтинг ${rating}`}
          aria-invalid={error ? true : false}
        >
          {ratingArr.map((item, ndx) => (
            <li
              className={ratingItemClassName}
              key={ndx}
              onMouseEnter={() => isEditable && changeDisplay(++ndx)}
              onMouseLeave={() => isEditable && changeDisplay(rating)}
              onClick={() => onClick(++ndx)}
            >{item}</li>
          ))}
        </ul>
        {
          error &&
          <div className={styles['error-msg']} role='alert'>{error.message}</div>
        }
      </div>
    );
  }
);

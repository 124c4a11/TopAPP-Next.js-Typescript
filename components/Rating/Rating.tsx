import { useEffect, useState, KeyboardEvent } from 'react';
import cn from 'classnames';

import styles from './Rating.module.css';
import StarIcon from './star.svg';
import { IRatingProps } from './Rating.props';

export const Rating = ({
  rating,
  className,
  isEditable = false,
  setRating,
  ...props
}: IRatingProps) => {
  const [ratingArr, setRatingArr] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedArr = ratingArr.map((item: JSX.Element, ndx: number) => {
      const starClassName = cn(
        styles.star,
        {
          [styles['star-filled']]: ndx < currentRating,
        }
      );

      return <StarIcon
        className={starClassName}
        tabIndex={isEditable ? 0 : -1}
        onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(++ndx, e)}
      />;
    });

    setRatingArr(updatedArr);
  };

  const changeDisplay = (i: number) => constructRating(i);

  const onClick = (i: number) => {
    if (!setRating) return;

    setRating(i);
  };

  const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
    if (e.code !== 'Space' || !setRating) return;

    setRating(i);
  };

  const ratingClassName = cn(
    className,
    styles.rating
  );

  const ratingItemClassName = cn(
    styles['rating-item'],
    {
      [styles['rating-item-editable']]: isEditable
    }
  );

  return <ul className={ratingClassName} {...props}>
    {ratingArr.map((item, ndx) => (
      <li
        className={ratingItemClassName}
        key={ndx}
        onMouseEnter={() => isEditable && changeDisplay(++ndx)}
        onMouseLeave={() => isEditable && changeDisplay(rating)}
        onClick={() => onClick(++ndx)}
      >{item}</li>
    ))}
  </ul>;
};

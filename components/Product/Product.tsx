import cn from 'classnames';
import Image from 'next/image';
import { useState } from 'react';

import { Button, Card, H, P, Rating, Review, ReviewForm, Tag, TagList } from '..';
import { declOfNum, priceRu } from '../../helpers/helpers';

import styles from './Product.module.css';
import { IProductProps } from './Product.props';

export const Product = ({ product, className, ...props }: IProductProps) => {
  const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);

  return (
    <>
      <Card
        className={cn(className, styles['product'])}
        {...props}
        color='white'
      >
        <header className={styles['header']}>
          <div className={styles['logo']}>
            <Image
              src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
              title={product.title}
              width={70}
              height={70}
            />
          </div>
          <div>
            <H tag='h3' className={styles['title']}>{product.title}</H>
            <TagList tags={product.categories} color='ghost' size='sm' />
          </div>
          <div className={styles['meta']}>
            <div className={styles['meta-item']}>
              <div className={styles['meta-value']}>
                {priceRu(product.price)}
                {
                  product.oldPrice &&
                  <Tag color='green' size='sm'>{product.price - product.oldPrice}</Tag>
                }
              </div>
              <p className={styles['meta-text']}>Цена</p>
            </div>
            <div className={styles['meta-item']}>
              <div className={styles['meta-value']}>{priceRu(product.credit)}/мес</div>
              <p className={styles['meta-text']}>В кредит</p>
            </div>
            <div className={cn(styles['meta-item'], styles['meta-rating'])}>
              <Rating rating={product.reviewAvg ?? product.initialRating} />
              <p className={styles['meta-text']}>{product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</p>
            </div>
          </div>
        </header>

        <div className={styles['body']}>
          <P className={styles['description']}>{product.description}</P>
          <ul className={styles['features']}>
            {
              product.characteristics.map((item) => (
                <li className={styles['features-item']} key={item.name}>
                  <div className={styles['features-item-title']}>{item.name}</div>
                  <div className={styles['features-item-divider']}></div>
                  <div className={styles['features-item-value']}>{item.value}</div>
                </li>
              ))
            }
          </ul>
          <div>
            {
              product.advantages &&
              <div className={cn(styles['info'], styles['info-green'])}>
                <h4 className={styles['info-title']}>Преимущеста</h4>
                <P>{product.advantages}</P>
              </div>
            }
            {
              product.disadvantages &&
              <div className={cn(styles['info'], styles['info-red'])}>
                <h4 className={styles['info-title']}>Недостатки</h4>
                <P>{product.disadvantages}</P>
              </div>
            }
          </div>
        </div>

        <footer className={styles['footer']}>
          <Button>Узнать подробнее</Button>
          <Button
            appearance='ghost'
            arrow={isReviewOpened ? 'down' : 'right'}
            onClick={() => setIsReviewOpened(!isReviewOpened)}
          >Читать отзывы</Button>
        </footer>
      </Card>
      <Card color='blue' className={
        cn(styles['review'], {
          [styles['review-opened']]: isReviewOpened,
          [styles['review-closed']]: !isReviewOpened,
        })
      }>
        {
          product.reviews.length > 0 &&
          <ul className={styles['review-list']}>
            {
              product.reviews.map((item) => (
                <li className={styles['review-list-item']} key={item._id}>
                  <Review review={item} />
                </li>
              ))
            }
          </ul>
        }
        <ReviewForm productId={product._id} />
      </Card>
    </>
  );
};

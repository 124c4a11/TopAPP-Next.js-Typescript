import cn from 'classnames';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';

import { Button, Card, P, Rating, Review, ReviewForm, Tag, TagList } from '..';
import { declOfNum, priceRu } from '../../helpers/helpers';

import styles from './Product.module.css';
import { IProductProps } from './Product.props';

export const Product = ({ product, className, ...props }: IProductProps) => {
  const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);

  const reviewRef = useRef<HTMLDivElement>(null);

  const variants = {
    visible: {
      height: 'auto',
      opacity: 1,
    },

    hidden: {
      height: 0,
      opacity: 0,
    },
  };

  const scrollToReview = () => {
    setIsReviewOpened(true);

    reviewRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    reviewRef.current?.focus();
  };

  return (
    <div className={className} {...props}>
      <Card
        className={cn(className, styles['product'])}
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
            <h2 className={styles['title']}>{product.title}</h2>
            <TagList tags={product.categories} color='ghost' size='sm' />
          </div>
          <div className={styles['meta']}>
            <div className={styles['meta-item']}>
              <div className={styles['meta-value']}>
                <div>
                  <span className='sr-only'>цена</span>
                  {product.price ? priceRu(product.price) : 0}
                </div>
                {
                  product.oldPrice &&
                  <Tag color='green' size='sm'>
                    <span className='sr-only'>скидка</span>
                    {product.price ? priceRu(product.price - product.oldPrice) : 0}
                  </Tag>
                }
              </div>
              <p className={styles['meta-text']} aria-hidden={true}>Цена</p>
            </div>
            <div className={styles['meta-item']}>
              <div className={styles['meta-value']}>
                <div>
                  <span className='sr-only'>В кредит</span>
                  {product.credit ? priceRu(product.credit) : 0}/мес
                </div>
              </div>
              <p className={styles['meta-text']} aria-hidden={true}>В кредит</p>
            </div>
            <div className={cn(styles['meta-item'], styles['meta-rating'])}>
              <div className='sr-only'>рейтинг {product.reviewAvg ?? product.initialRating} звезд</div>
              <Rating rating={product.reviewAvg ?? product.initialRating} />
              <p className={styles['meta-text']}>
                <a
                  href="#ref"
                  onClick={scrollToReview}
                  className={styles['meta-link']}
                >
                  {product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
                </a>
              </p>
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
            aria-expanded={isReviewOpened}
          >Читать отзывы</Button>
        </footer>
      </Card>
      <motion.div
        variants={variants}
        initial='hidden'
        animate={isReviewOpened ? 'visible' : 'hidden'}
        className={styles['review']}
      >
        <Card
          color='blue'
          className={styles['review-card']}
          ref={reviewRef}
          tabIndex={isReviewOpened ? 0 : -1}
        >
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
          <ReviewForm productId={product._id} isOpened={isReviewOpened} />
        </Card>
      </motion.div>
    </div>
  );
};

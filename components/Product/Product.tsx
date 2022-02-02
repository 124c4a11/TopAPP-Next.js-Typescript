import cn from 'classnames';

import { Card, H, Rating, Tag, TagList } from '..';
import { priceRu } from '../../helpers/helpers';

import styles from './Product.module.css';
import { IProductProps } from './Product.props';

export const Product = ({ product, className, ...props }: IProductProps) => {
  return (
    <Card
      className={cn(className, styles['product'])}
      {...props}
      color='white'
    >
      <header className={styles['header']}>
        <div className={styles['logo']}></div>
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
            <p className={styles['meta-text']}>{product.reviewCount} отзывов</p>
          </div>
        </div>
      </header>
    </Card>
  );
};

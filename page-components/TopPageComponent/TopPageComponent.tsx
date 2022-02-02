import cn from 'classnames';
import parse from 'html-react-parser';

import styles from './TopPageComponent.module.css';
import { Advantages, H, HhData, Product, Sort, Tag, TagList } from '../../components';
import { ITopPageComponentProps } from './TopPageComponent.props';
import { TopLevelCategory } from '../../interfaces/page.interface';
import { SortEnum } from '../../components/Sort/Sort.props';
import { useReducer } from 'react';
import { sortReducer } from './sort.reducer';

export const TopPageComponent = ({ page, products, firstCategory }: ITopPageComponentProps) => {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(sortReducer, {
    products,
    sort: SortEnum.Rating,
  });

  const setSort = (sort: SortEnum) => dispatchSort({ type: sort });

  return (
    <>
      <header className={styles.header}>
        <H>{page.title}</H>
        {products && <Tag color='gray'>{products.length}</Tag>}
        <Sort
          sort={sort}
          setSort={setSort}
        />
      </header>
      {
        sortedProducts &&
        <div className={styles['section']}>
          <ul className={styles['product-list']}>
            {
              sortedProducts.map((product) => (
                <li key={product._id}>
                  <Product product={product} />
                </li>
              ))
            }
          </ul>
        </div>
      }
      {
        firstCategory === TopLevelCategory.Courses && page.hh &&
        <section className={styles['section']}>
          <header className={cn(styles['hh-title'], styles['section-title'])}>
            <H tag='h2'>Вакансии - {page.category}</H>
            <Tag color='red'>hh.ru</Tag>
          </header>
          <HhData {...page.hh} />
        </section>
      }
      {
        page.advantages && page.advantages.length > 0 &&
        <section className={styles['section']}>
          <H tag='h2' className={styles['section-title']}>Преимущества</H>
          <Advantages advantages={page.advantages} />
        </section>
      }
      {
        page.seoText &&
        <section className={styles['section']}>
          {parse(page.seoText)}
        </section>
      }
      {
        page.tags &&
        <section className={styles['section']}>
          <H tag='h2' className={styles['section-title']}>Получаемые навыки</H>
          <TagList tags={page.tags} />
        </section>
      }
    </>
  );
};

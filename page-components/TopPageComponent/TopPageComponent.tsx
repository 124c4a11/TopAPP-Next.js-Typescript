import cn from 'classnames';
import parse from 'html-react-parser';

import styles from './TopPageComponent.module.css';
import { Advantages, H, HhData, Tag, TagList } from '../../components';
import { ITopPageComponentProps } from './TopPageComponent.props';
import { TopLevelCategory } from '../../interfaces/page.interface';

export const TopPageComponent = ({ page, products, firstCategory }: ITopPageComponentProps) => {
  return (
    <>
      <header className={styles.header}>
        <H>{page.title}</H>
        {products && <Tag color='gray'>{products.length}</Tag>}
        <div>Сортировка</div>
      </header>
      <div className={styles['section']}>
        {products && products.map((product) => <div key={product._id}>{product.title}</div>)}
      </div>
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

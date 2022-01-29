import cn from 'classnames';

import styles from './TopPageComponent.module.css';
import { Advantages, H, HhData, Tag } from '../../components';
import { ITopPageComponentProps } from './TopPageComponent.props';
import { TopLevelCategory } from '../../interfaces/page.interface';

export const TopPageComponent = ({ page, products, firstCategory }: ITopPageComponentProps) => {
  return (
    <>
      <header className={styles.header}>
        <H>{page.title}</H>
        {products && <Tag color="gray">{products.length}</Tag>}
        <div>Сортировка</div>
      </header>
      <div>
        {products && products.map((product) => <div key={product._id}>{product.title}</div>)}
      </div>
      {
        firstCategory === TopLevelCategory.Courses && page.hh &&
        <>
          <div className={cn(styles["hh-title"], styles["section-title"])}>
            <H tag="h2">Вакансии - {page.category}</H>
            <Tag color="red">hh.ru</Tag>
          </div>
          <HhData {...page.hh} />
        </>
      }
      {
        page.advantages && page.advantages.length > 0 &&
        <>
          <H tag="h2" className={styles['section-title']}>Преимущества</H>
          <Advantages advantages={page.advantages} />
        </>
      }
    </>
  );
};

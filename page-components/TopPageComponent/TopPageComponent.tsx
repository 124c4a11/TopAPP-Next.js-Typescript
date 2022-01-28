import styles from './TopPageComponent.module.css';
import { H, Tag } from '../../components';
import { ITopPageComponentProps } from './TopPageComponent.props';

export const TopPageComponent = ({ page, products, firstCategory }: ITopPageComponentProps) => {
  return (
    <>
      <header className={styles.header}>
        <H>{page.title}</H>
        {products && <Tag color="gray">{products.length}</Tag>}
        <div>Сортировка</div>
      </header>
    </>
  );
};

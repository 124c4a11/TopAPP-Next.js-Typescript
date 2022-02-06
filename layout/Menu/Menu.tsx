import cn from 'classnames';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import { AppContext } from '../../context/app.context';
import Link from 'next/link';
import { motion } from 'framer-motion';

import styles from './Menu.module.css';
import { IFirstLevelMenu, IPageItem } from '../../interfaces/menu.interface';
import { firstLevelMenu } from '../../helpers/helpers';

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const router = useRouter();

  const thirdLevelOpenToggle = (secondCategory: string) => {
    setMenu && setMenu(menu.map((item) => {
      if (item._id.secondCategory === secondCategory) {
        item.isOpened = !item.isOpened;
      }

      return item;
    }));
  };

  const buildFirstLevel = () => (
    firstLevelMenu.map((item) => {
      const isActive = item.id === firstCategory;

      const itemClassName = cn(
        styles['item'],
        styles['first-level-item'],
        {
          [styles['item-active']]: isActive,
        }
      );

      return (
        <li key={item.route}>
          <Link href={`/${item.route}`}>
            <a className={itemClassName}>
              {item.icon}
              <span>{item.name}</span>
            </a>
          </Link>

          {isActive && buildSecondLevel(item)}
        </li>
      );
    })
  );

  const buildSecondLevel = (menuItem: IFirstLevelMenu) => {
    if (!menu.length) return;

    const itemClassName = cn(
      styles['item'],
      styles['second-level-item'],
    );

    return (
      <ul className={styles['second-level']}>
        {menu.map((item) => {
          if (item.pages.map((page) => page.alias).includes(router.asPath.split('/')[2])) {
            item.isOpened = true;
          }

          return (
            <li key={item._id.secondCategory}>
              <div
                className={itemClassName}
                onClick={() => thirdLevelOpenToggle(item._id.secondCategory)}
              >{item._id.secondCategory}</div>

              {buildThirdLevel(item.pages, menuItem.route, item.isOpened)}
            </li>
          );
        })}
      </ul>
    );
  };

  const buildThirdLevel = (pages: IPageItem[], route: string, isOpened?: boolean) => {
    const variants = {
      visible: {
        transition: {
          when: 'beforeChildren',
          staggerChildren: 0.01,
        }
      },

      hidden: {}
    };

    const variantsChildren = {
      visible: {
        height: 29,
        opacity: 1
      },
      hidden: {
        height: 0,
        opacity: 0
      }
    };

    return (
      <motion.ul
        layout
        variants={variants}
        initial={isOpened ? 'visible' : 'hidden'}
        animate={isOpened ? 'visible' : 'hidden'}
        className={styles['third-level']}
      >
        {pages.map((page) => {
          const path = `/${route}/${page.alias}`;

          const itemClassName = cn(
            styles['item'],
            styles['third-level-item'],
            {
              [styles['item-active']]: path === router.asPath,
            }
          );

          return (
            <motion.li
              variants={variantsChildren}
              key={page._id}
              className={styles['third-level-list-item']}
            >
              <Link href={path}>
                <a className={itemClassName}>{page.category}</a>
              </Link>
            </motion.li>
          );
        })}
      </motion.ul>
    );
  };

  return <ul className={styles.menu}>{buildFirstLevel()}</ul>;
};

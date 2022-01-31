import cn from 'classnames';

import styles from './Sidebar.module.css';
import Logo from '../logo.svg';
import { Menu } from '../Menu/Menu';
import { ISidebarProps } from './Sidebar.props';
import { Search } from '../../components';

export const Sidebar = ({ className, ...props }: ISidebarProps): JSX.Element => {
  return (
    <aside className={cn(className, styles.sidebar)} {...props}>
      <Logo className={styles.logo} />
      <Search />
      <Menu />
    </aside>
  );
};

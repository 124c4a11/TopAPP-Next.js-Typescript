import { Menu } from '../Menu/Menu';
import { ISidebarProps } from './Sidebar.props';

export const Sidebar = (props: ISidebarProps): JSX.Element => {
  return <aside {...props}><Menu /></aside>;
};

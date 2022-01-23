import cn from 'classnames';
import { format } from 'date-fns';

import styles from './Footer.module.css';
import { IFooterProps } from './Footer.props';
import { P } from '../../components';

export const Footer = ({ className, ...props }: IFooterProps): JSX.Element => (
  <footer className={cn(className, styles.footer)} {...props}>
    <P>OwlTop © 2020 - {format(new Date, 'yyyy')} Все права защищены</P>
    <a href="#" target="_blank">Пользовательское соглашение</a>
    <a href="#" target="_blank">Политика конфиденциальности</a>
  </footer>
);

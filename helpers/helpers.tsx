import { IFirstLevelMenu } from '../interfaces/menu.interface';
import { TopLevelCategory } from '../interfaces/page.interface';

import BookIcon from './icons/book.svg';
import BoxIcon from './icons/box.svg';
import CloudIcon from './icons/cloud.svg';
import HatIcon from './icons/hat.svg';

export const firstLevelMenu: IFirstLevelMenu[] = [
  { route: 'courses', name: 'Курсы', icon: <HatIcon />, id: TopLevelCategory.Courses },
  { route: 'services', name: 'Сервисы', icon: <CloudIcon />, id: TopLevelCategory.Services },
  { route: 'books', name: 'Книги', icon: <BookIcon />, id: TopLevelCategory.Books },
  { route: 'products', name: 'Товары', icon: <BoxIcon />, id: TopLevelCategory.Products },
];

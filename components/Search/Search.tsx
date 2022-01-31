import cn from 'classnames';
import { useState } from 'react';

import MagnifierIcon from './magnifier.svg';
import styles from './Search.module.css';
import { ISearchProps } from './Search.props';
import { Button, Input } from '..';
import { useRouter } from 'next/router';

export const Search = ({ className, ...props }: ISearchProps) => {
  const [search, setSearch] = useState<string>('');
  const router = useRouter();

  const goToSearch = () => {
    router.push({
      pathname: '/search',
      query: { q: search },
    });
  };

  const handleKeyDown = (key: string) => {
    if (key === 'Enter') goToSearch();
  };

  return (
    <div className={cn(className, styles['search'])} {...props}>
      <Input
        className={styles['input']}
        placeholder='Поиск...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e.key)}
      />
      <Button
        appearance='primary'
        className={styles['btn']}
        onClick={goToSearch}
      ><MagnifierIcon /></Button>
    </div>
  );
};

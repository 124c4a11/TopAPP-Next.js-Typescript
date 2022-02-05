import { GetStaticProps } from 'next';
import axios from 'axios';

import { withLayout } from '../layout/Layout';
import { IMenuItem } from '../interfaces/menu.interface';
import { API } from '../helpers/api';

function Search(): JSX.Element {
  return (
    <>
      Search
    </>
  );
}

export default withLayout(Search);

export const getStaticProps: GetStaticProps<ISearchProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<IMenuItem[]>(API.topPage.find, {
    firstCategory
  });

  return {
    props: {
      menu,
      firstCategory,
    }
  };
};

interface ISearchProps extends Record<string, unknown> {
  menu: IMenuItem[];
  firstCategory: number;
}

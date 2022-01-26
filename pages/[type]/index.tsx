import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import axios from 'axios';
import { ParsedUrlQuery } from 'querystring';

import { IMenuItem } from '../../interfaces/menu.interface';
import { withLayout } from '../../layout/Layout';
import { firstLevelMenu } from '../../helpers/helpers';


function Type({ firstCategory }: ITypeProps): JSX.Element {
  return (
    <>
      Type {firstCategory}
    </>
  );
}

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: firstLevelMenu.map((m) => `/${m.route}`),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<ITypeProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) return { notFound: true };

  const firstCategoryItem = firstLevelMenu.find((item) => item.route === params.type);

  if (!firstCategoryItem) return { notFound: true };

  const { data: menu } = await axios.post<IMenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
    firstCategory: firstCategoryItem.id,
  });

  return {
    props: {
      menu,
      firstCategory: firstCategoryItem.id,
    }
  };
};

interface ITypeProps extends Record<string, unknown> {
  menu: IMenuItem[];
  firstCategory: number;
}

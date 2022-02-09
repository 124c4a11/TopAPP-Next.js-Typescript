import axios from 'axios';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';

import { withLayout } from '../../layout/Layout';
import { IMenuItem } from '../../interfaces/menu.interface';
import { ITopPageModel, TopLevelCategory } from '../../interfaces/page.interface';
import { IProductModel } from '../../interfaces/product.interface';
import { firstLevelMenu } from '../../helpers/helpers';
import { TopPageComponent } from '../../page-components';
import { API } from '../../helpers/api';

function TopPage({ products, page, firstCategory }: ITopPageProps): JSX.Element {
  return (
    <>
      {
        page && products &&
        <>
          <Head>
            <title>{page.metaTitle}</title>
            <meta name='description' content={page.metaDescription} />
            <meta property='og:title' content={page.metaTitle} />
            <meta property='og:description' content={page.metaDescription} />
            <meta property='og:type' content='article' />
          </Head>
          <TopPageComponent
            products={products}
            page={page}
            firstCategory={firstCategory}
          />
        </>
      }
    </>
  );
}

export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];

  for (const m of firstLevelMenu) {
    const { data: menu } = await axios.post<IMenuItem[]>(
      API.topPage.find,
      {
        firstCategory: m.id,
      }
    );

    paths = paths.concat(menu.flatMap((item) => item.pages.map((p) => `/${m.route}/${p.alias}`)));
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<ITopPageProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) return { notFound: true };

  const firstCategoryItem = firstLevelMenu.find((item) => item.route === params.type);

  if (!firstCategoryItem) return { notFound: true };

  try {
    const { data: menu } = await axios.post<IMenuItem[]>(
      API.topPage.find,
      {
        firstCategory: firstCategoryItem.id,
      }
    );

    if (!menu.length) return { notFound: true };

    const { data: page } = await axios.get<ITopPageModel>(
      `${API.topPage.byAlias}/${params.alias}`
    );

    const { data: products } = await axios.post<IProductModel[]>(
      API.product.find,
      {
        category: page.category,
        limit: 10,
      }
    );

    return {
      props: {
        menu,
        firstCategory: firstCategoryItem.id,
        page,
        products,
      }
    };
  } catch {
    return { notFound: true };
  }
};

interface ITopPageProps extends Record<string, unknown> {
  menu: IMenuItem[];
  firstCategory: TopLevelCategory;
  page: ITopPageModel;
  products: IProductModel[];
}

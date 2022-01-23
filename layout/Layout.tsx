import { FunctionComponent } from 'react';

import { ILayoutProps } from './Layout.props';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { Footer } from './Footer/Footer';

const Layout = ({ children }: ILayoutProps): JSX.Element => (
  <>
    <Header></Header>
    <div>
      <Sidebar />
      <main>{children}</main>
    </div>
    <Footer></Footer>
  </>
);

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};

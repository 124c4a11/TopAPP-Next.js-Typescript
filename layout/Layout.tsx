import { FunctionComponent } from 'react';

import styles from './Layout.module.css';
import { AppContextProvider, IAppContext } from '../context/app.context';
import { ILayoutProps } from './Layout.props';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { Footer } from './Footer/Footer';

const Layout = ({ children }: ILayoutProps): JSX.Element => (
  <div className={styles.container}>
    <Header className={styles.header} />
    <Sidebar className={styles.sidebar} />
    <main className={styles.main}>{children}</main>
    <Footer className={styles.footer}></Footer>
  </div>
);

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
};

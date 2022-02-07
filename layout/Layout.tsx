import { FunctionComponent, KeyboardEvent, useRef } from 'react';

import styles from './Layout.module.css';
import { AppContextProvider, IAppContext } from '../context/app.context';
import { ILayoutProps } from './Layout.props';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { Footer } from './Footer/Footer';

const Layout = ({ children }: ILayoutProps): JSX.Element => {
  const mainRef = useRef<HTMLDivElement>(null);

  const skipContentAction = (e: KeyboardEvent) => {
    if (e.code === 'Space' || e.code === 'Enter') {
      e.preventDefault();

      mainRef.current?.focus();
    }
  };

  return (
    <div className={styles.container}>
      <button
        tabIndex={1}
        className={styles['skip-link']}
        onKeyDown={(e: KeyboardEvent) => skipContentAction(e)}
      >Сразу к содержимому</button>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <main
        ref={mainRef}
        className={styles.main}
        tabIndex={0}
      >{children}</main>
      <Footer className={styles.footer}></Footer>
    </div>
  );
};

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

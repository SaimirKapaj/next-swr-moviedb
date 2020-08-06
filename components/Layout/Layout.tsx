import Head from 'next/head';

import Header from 'components/Header';
import Footer from 'components/Footer';

type Props = {
  children?: React.ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Next Typescript Tailwind starter' }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <header className="bg-gray-200 p-4">
          <Header />
        </header>
        <main className="flex-1 bg-gray-100 p-4">{children}</main>
        <footer className="bg-gray-200 p-4">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Layout;

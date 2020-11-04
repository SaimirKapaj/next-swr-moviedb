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
      <div className="flex">
        <div className="flex flex-col min-h-screen w-full">
          <Header />
          <main className="flex-1 p-4 md:p-8">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;

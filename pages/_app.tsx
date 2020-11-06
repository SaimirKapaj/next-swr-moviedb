import { SWRConfig } from 'swr';

import { GenresProvider } from 'context/genres';

import 'styles/tailwind.base.css';
import 'styles/base.css';

const fetcher = (url: string) => {
  const prefix = url.includes('?') ? '&' : '?';

  return fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT}/${url}${prefix}api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  ).then((res) => res.json());
};

const MyApp = ({ Component, pageProps }) => {
  return (
    <SWRConfig value={{ fetcher }}>
      <GenresProvider>
        <Component {...pageProps} />
      </GenresProvider>
    </SWRConfig>
  );
};

export default MyApp;

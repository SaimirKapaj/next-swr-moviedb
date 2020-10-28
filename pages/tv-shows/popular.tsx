import useSWR from 'swr';

import Layout from 'components/Layout';

const PopularMoviesPage = () => {
  return (
    <Layout>
      <div className="flex items-center justify-between my-5">
        <h1 className="text-xl">Popular Movies</h1>
      </div>
    </Layout>
  );
};

export default PopularMoviesPage;

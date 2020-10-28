import useSWR from 'swr';

import Layout from 'components/Layout';

const TopRatedTvShowsPage = () => {
  return (
    <Layout>
      <div className="flex items-center justify-between my-5">
        <h1 className="text-xl">Top Rated Tv Shows</h1>
      </div>
    </Layout>
  );
};

export default TopRatedTvShowsPage;

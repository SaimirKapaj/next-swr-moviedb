import Layout from 'components/Layout';
import InfiniteLoadingList from 'components/InfiniteLoadingList';
import TitleWithBackButton from 'components/TitleWithBackButton';

const TvTopRatedPage = () => {
  return (
    <Layout>
      <TitleWithBackButton title="Top Rated" />
      <InfiniteLoadingList url="tv/top_rated" category="tv" />
    </Layout>
  );
};

export default TvTopRatedPage;

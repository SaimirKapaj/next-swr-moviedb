import Layout from 'components/Layout';
import InfiniteLoadingList from 'components/InfiniteLoadingList';
import TitleWithBackButton from 'components/TitleWithBackButton';

const TvPopularPage = () => {
  return (
    <Layout>
      <TitleWithBackButton title="Popular" />
      <InfiniteLoadingList url="tv/on_the_air" category="tv" />
    </Layout>
  );
};

export default TvPopularPage;

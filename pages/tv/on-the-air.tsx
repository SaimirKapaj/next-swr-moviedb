import Layout from 'components/Layout';
import InfiniteLoadingList from 'components/InfiniteLoadingList';
import TitleWithBackButton from 'components/TitleWithBackButton';

const TvOnTheAirPage = () => {
  return (
    <Layout>
      <TitleWithBackButton title="On the air" />
      <InfiniteLoadingList url="tv/on_the_air" category="tv" />
    </Layout>
  );
};

export default TvOnTheAirPage;

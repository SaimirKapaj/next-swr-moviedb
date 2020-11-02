import Layout from 'components/Layout';
import InfiniteLoadingList from 'components/InfiniteLoadingList';
import TitleWithBackButton from 'components/TitleWithBackButton';

const TvAiringTodayPage = () => {
  return (
    <Layout>
      <TitleWithBackButton title="Airing Today" />
      <InfiniteLoadingList url="tv/airing_today" category="tv" />
    </Layout>
  );
};

export default TvAiringTodayPage;

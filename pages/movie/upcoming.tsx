import Layout from 'components/Layout';
import InfiniteLoadingList from 'components/InfiniteLoadingList';
import TitleWithBackButton from 'components/TitleWithBackButton';

const MovieUpcomingPage = () => {
  return (
    <Layout>
      <TitleWithBackButton title="Upcoming" />
      <InfiniteLoadingList url="movie/upcoming" category="movie" />
    </Layout>
  );
};

export default MovieUpcomingPage;

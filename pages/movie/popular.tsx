import Layout from 'components/Layout';
import InfiniteLoadingList from 'components/InfiniteLoadingList';
import TitleWithBackButton from 'components/TitleWithBackButton';

const MoviePopularPage = () => {
  return (
    <Layout>
      <TitleWithBackButton title="Popular" />
      <InfiniteLoadingList url="movie/popular" category="movie" />
    </Layout>
  );
};

export default MoviePopularPage;

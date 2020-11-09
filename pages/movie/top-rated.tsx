import Layout from 'components/Layout';
import InfiniteLoadingList from 'components/InfiniteLoadingList';
import TitleWithBackButton from 'components/TitleWithBackButton';

const MovieTopRatedPage = () => {
  return (
    <Layout>
      <TitleWithBackButton title="Top Rated" />
      <InfiniteLoadingList url="movie/top_rated" mediaType="movie" />
    </Layout>
  );
};

export default MovieTopRatedPage;

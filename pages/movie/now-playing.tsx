import Layout from 'components/Layout';
import InfiniteLoadingList from 'components/InfiniteLoadingList';
import TitleWithBackButton from 'components/TitleWithBackButton';

const MovieNowPlayingPage = () => {
  return (
    <Layout>
      <TitleWithBackButton title="Now Playing" />
      <InfiniteLoadingList url="movie/now_playing" mediaType="movie" />
    </Layout>
  );
};

export default MovieNowPlayingPage;

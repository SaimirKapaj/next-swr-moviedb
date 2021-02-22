import { useRouter } from 'next/router';

import { useDetails } from 'hooks';
import Layout from 'components/Layout';
import DetailsPage from 'components/DetailsPage';

const MovieDetailsPage = () => {
  const { query } = useRouter();
  const { details, loading } = useDetails('movie', query.id);

  const movieDatails = {
    media_type: 'movie',
    ...details
  };

  return (
    <Layout>
      <DetailsPage details={movieDatails} loading={loading} />
    </Layout>
  );
};

export default MovieDetailsPage;

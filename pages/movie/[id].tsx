import { useRouter } from 'next/router';

import { useDetails } from 'hooks';
import Layout from 'components/Layout';
import DetailsPage from 'components/DetailsPage';

const MovieDetailsPage = () => {
  const { query } = useRouter();
  const { details } = useDetails('movie', query.id);

  return (
    <Layout>
      <DetailsPage details={details} />
    </Layout>
  );
};

export default MovieDetailsPage;

import { useRouter } from 'next/router';

import { useDetails } from 'hooks';
import Layout from 'components/Layout';
import DetailsPage from 'components/DetailsPage';

const TvDetailsPage = () => {
  const { query } = useRouter();
  const { details } = useDetails('tv', query.id);

  return (
    <Layout>
      <DetailsPage details={details} />
    </Layout>
  );
};

export default TvDetailsPage;

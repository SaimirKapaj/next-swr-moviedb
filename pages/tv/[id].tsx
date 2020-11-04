import { useRouter } from 'next/router';
import useSWR from 'swr';

import Layout from 'components/Layout';
import DetailsPage from 'components/DetailsPage';

const TvDetailsPage = () => {
  const { query } = useRouter();
  const { data: details } = useSWR(`tv/${query.id}`);
  const { data: credits } = useSWR(`tv/${query.id}/credits`);

  return (
    <Layout>
      <DetailsPage details={details} credits={credits} />
    </Layout>
  );
};

export default TvDetailsPage;

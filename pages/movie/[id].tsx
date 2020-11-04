import { useRouter } from 'next/router';
import useSWR from 'swr';

import Layout from 'components/Layout';
import DetailsPage from 'components/DetailsPage';

const MovieDetailsPage = () => {
  const { query } = useRouter();
  const { data: details } = useSWR(`movie/${query.id}`);
  const { data: credits } = useSWR(`movie/${query.id}/credits`);

  return (
    <Layout>
      <DetailsPage details={details} credits={credits} />
    </Layout>
  );
};

export default MovieDetailsPage;

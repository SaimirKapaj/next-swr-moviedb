import { useRouter } from 'next/router';

import Layout from 'components/Layout';

const MovieDetailPage = () => {
  const { query } = useRouter();

  return (
    <Layout>
      <div className="flex items-center justify-between my-5">
        <h1 className="text-xl">{query.id}</h1>
      </div>
    </Layout>
  );
};

export default MovieDetailPage;

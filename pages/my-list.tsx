import useSWR from 'swr';

import Layout from 'components/Layout';

const MyListPage = () => {
  return (
    <Layout>
      <div className="flex items-center justify-between my-5">
        <h1 className="text-xl">My List</h1>
      </div>
    </Layout>
  );
};

export default MyListPage;

import React from 'react';
import Link from 'next/link';

import { GenresContext } from 'context/genres';
import { useLocalStorage } from 'hooks';
import { Movie } from 'types';
import Layout from 'components/Layout';
import MovieItem from 'components/MovieItem';

const MyListPage = () => {
  const { movieGenres, tvGenres } = React.useContext(GenresContext);
  const [myList, setMyList] = useLocalStorage<Movie[]>('myList', []);

  return (
    <Layout>
      <div className="flex items-center justify-between mt-5 mb-2">
        <h1 className="text-xl flex items-center">My List</h1>
      </div>
      <div className="flex flex-wrap -mx-3">
        {myList.map((movie) => (
          <React.Fragment key={movie?.id}>
            {movie?.media_type !== 'person' ? (
              <div className="flex-none p-3 w-full sm:w-1/2 lg:w-1/4 xl:w-1/5">
                <Link href={`/${movie?.media_type}/${movie?.id}`}>
                  <a>
                    <MovieItem details={movie} genres={movieGenres} />
                  </a>
                </Link>
              </div>
            ) : null}
          </React.Fragment>
        ))}
      </div>
    </Layout>
  );
};

export default MyListPage;

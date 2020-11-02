import React from 'react';
import { useSWRInfinite } from 'swr';

import { GenresContext } from 'context/genres';
import MovieItem from 'components/MovieItem/MovieItem';
import LoadingMoviePlaceholder from 'components/loading-placeholders/LoadingMoviePlaceholder';
import Icon from 'components/Icon';
import Link from 'next/link';

interface Props {
  url: string;
  category: string;
}

const InfiniteLoadingList = ({ url, category }: Props) => {
  const { movieGenres, tvGenres } = React.useContext(GenresContext);
  const { data, error, size, setSize } = useSWRInfinite((index) => `${url}?page=${index + 1}`);
  const genres = category === 'movie' ? movieGenres : tvGenres;

  const isLoadingInitialData = !data && !error;
  const isLoadingMore = isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === 'undefined');

  return (
    <>
      <div className="flex flex-wrap -mx-3 -mt-3">
        {data ? (
          <>
            {data?.map((item: any, index) => (
              <React.Fragment key={index}>
                {item.results.map((movie) => (
                  <div key={movie.id} className="flex-none p-3 w-full sm:w-1/2 lg:w-1/4 xl:w-1/5">
                    <Link href={`/${category}/${movie.id}`}>
                      <a>
                        <MovieItem
                          image={movie.backdrop_path}
                          title={movie.name ?? movie.title}
                          vote={movie.vote_average}
                          genres={genres?.filter((genre) => movie.genre_ids.includes(genre.id))}
                        />
                      </a>
                    </Link>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </>
        ) : (
          [...Array(5)].map((_, index) => (
            <div className="flex-none p-1 w-full sm:w-1/2 lg:w-1/4 xl:w-1/5">
              <LoadingMoviePlaceholder delay={index} key={index} />
            </div>
          ))
        )}
      </div>
      {data && (
        <div className="w-full flex justify-center mt-12">
          <button
            className={`flex relative items-center bg-teal-500 hover:bg-teal-600 focus:outline-none py-3 px-10 rounded-lg text-white mx-auto shadow ${
              isLoadingMore ? 'cursor-not-allowed' : ''
            }`}
            onClick={() => setSize(size + 1)}
          >
            {isLoadingMore ? <Icon name="spinner" className="animate-spin w-4 mb-1 h-5 absolute right-0 mr-4" /> : ''}{' '}
            Load More
          </button>
        </div>
      )}
    </>
  );
};

export default InfiniteLoadingList;

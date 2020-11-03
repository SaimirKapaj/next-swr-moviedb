import React from 'react';
import Link from 'next/link';
import { useSWRInfinite } from 'swr';

import { GenresContext } from 'context/genres';
import MovieItem from 'components/MovieItem/MovieItem';
import LoadingMoviePlaceholder from 'components/loading-placeholders/LoadingMoviePlaceholder';
import Icon from 'components/Icon';

interface Props {
  url: string;
  category: string;
}

const InfiniteLoadingList = ({ url, category }: Props) => {
  const { movieGenres, tvGenres } = React.useContext(GenresContext);
  const { data, error, size, setSize } = useSWRInfinite((index) => `${url}?page=${index + 1}`);
  const genres = category === 'movie' ? movieGenres : tvGenres;
  const [selectedGenres, setSelectedGenres] = React.useState([]);

  const isLoadingInitialData = !data && !error;
  const isLoadingMore = isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isLoadedAll = data && size === data[0]?.total_pages;

  const updateGenres = (id: number) => {
    if (selectedGenres.includes(id)) {
      setSelectedGenres(selectedGenres.filter((genre) => genre !== id));
      return;
    }
    setSelectedGenres([...selectedGenres, id]);
  };

  const isInSelectedGenres = (genreIds: number[]) => {
    return genreIds.some((genre) => selectedGenres.includes(genre)) || !selectedGenres.length;
  };

  return (
    <>
      <div className="overflow-hidden relative">
        <div className="flex flex-no-wrap max-w-full overflow-x-scroll overflow-y-hidden pb-4 -mb-3">
          {selectedGenres.length ? (
            <button
              className="p-2 px-3 rounded-full bg-gray-200 shadow mr-3 focus:outline-none"
              onClick={() => setSelectedGenres([])}
            >
              <Icon name="cross" className="w-4 h-4" />
            </button>
          ): null}
          {genres.map((item) => (
            <button
              key={item.id}
              className={`bg-gray-200 px-6 py-2 rounded-full shadow mr-3 whitespace-no-wrap focus:outline-none ${
                selectedGenres.includes(item.id) && ' bg-teal-500 text-white'
              }`}
              onClick={() => updateGenres(item.id)}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mt-6">
        {data ? (
          <>
            {data?.map((item: any, index) => (
              <React.Fragment key={index}>
                {item.results.map((movie: any) => {
                  return (
                    <React.Fragment key={movie.id}>
                      {isInSelectedGenres(movie.genre_ids) && (
                        <div className="flex-none p-3 w-full sm:w-1/2 lg:w-1/4 xl:w-1/5">
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
                      )}
                    </React.Fragment>
                  );
                })}
              </React.Fragment>
            ))}
          </>
        ) : (
          [...Array(5)].map((_, index) => (
            <div key={index} className="flex-none p-1 w-full sm:w-1/2 lg:w-1/4 xl:w-1/5">
              <LoadingMoviePlaceholder delay={index} />
            </div>
          ))
        )}
      </div>
      {data && !isLoadedAll ? (
        <div className="w-full flex justify-center mt-12">
          <button
            className={`flex relative items-center bg-teal-500 hover:bg-teal-600 focus:outline-none py-3 px-10 rounded-lg text-white mx-auto shadow ${
              isLoadingMore ? 'cursor-not-allowed' : ''
            }`}
            onClick={() => setSize(size + 1)}
          >
            {isLoadingMore ? <Icon name="spinner" className="animate-spin w-4 mb-1 h-5 absolute right-0 mr-4" /> : ''}
            Load More
          </button>
        </div>
      ) : null}
    </>
  );
};

export default InfiniteLoadingList;

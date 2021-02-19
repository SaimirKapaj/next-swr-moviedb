import React from 'react';
import Link from 'next/link';

import { useInfiniteLoading } from 'hooks';
import { GenresContext } from 'context/genres';
import { MediaType } from 'types';
import MovieItem from 'components/MovieItem/MovieItem';
import LoadingMoviePlaceholder from 'components/loading-placeholders/LoadingMoviePlaceholder';
import Icon from 'components/Icon';

interface Props {
  url: string;
  mediaType: MediaType;
}

const InfiniteLoadingList = ({ url, mediaType }: Props) => {
  const { movieGenres, tvGenres } = React.useContext(GenresContext);
  const { data, size, setSize, isLoadingMore, isLoadedAll } = useInfiniteLoading(url);
  const genres = mediaType === 'movie' ? movieGenres : tvGenres;
  const [selectedGenres, setSelectedGenres] = React.useState([]);

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
      <div className="overflow-hidden relative -ml-1">
        <div className="flex flex-no-wrap max-w-full overflow-x-scroll overflow-y-hidden pb-4 -mb-3">
          {selectedGenres.length ? (
            <button
              className="p-2 px-3 rounded-full bg-gray-800 ml-1 mr-2 focus:outline-none"
              onClick={() => setSelectedGenres([])}
            >
              <Icon name="cross" className="w-4 h-4" />
            </button>
          ) : null}
          {genres.map((item) => (
            <button
              key={item.id}
              className={`bg-gray-800 px-6 py-2 rounded-full ml-1 mr-2 whitespace-no-wrap focus:outline-none ${
                selectedGenres.includes(item.id) && ' bg-blue-500 border-blue-600 text-white'
              }`}
              onClick={() => updateGenres(item.id)}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mt-6">
        {data
          ? data?.map((item) =>
              item.results.map((movie: any) => (
                <React.Fragment key={movie.id}>
                  {isInSelectedGenres(movie.genre_ids) && (
                    <div className="flex-none p-3 w-full sm:w-1/2 lg:w-1/4 xl:w-1/5">
                      <Link href={`/${mediaType}/${movie.id}`}>
                        <a>
                          <MovieItem details={movie} genres={genres} />
                        </a>
                      </Link>
                    </div>
                  )}
                </React.Fragment>
              ))
            )
          : [...Array(5)].map((_, index) => (
              <div key={index} className="flex-none p-1 w-full sm:w-1/2 lg:w-1/4 xl:w-1/5">
                <LoadingMoviePlaceholder delay={index} />
              </div>
            ))}
      </div>
      {data && !isLoadedAll ? (
        <div className="w-full flex justify-center mt-12">
          <button
            className={`flex relative items-center bg-blue-500 hover:bg-blue-600 border border-blue-600 focus:outline-none py-3 px-10 rounded-lg text-white mx-auto ${
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

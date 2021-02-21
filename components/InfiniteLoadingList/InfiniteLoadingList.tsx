import React from 'react';
import Link from 'next/link';

import { useInfiniteLoading } from 'hooks';
import { GenresContext } from 'context/genres';
import { MediaType } from 'types';
import MovieItem from 'components/MovieItem/MovieItem';
import LoadingMoviePlaceholder from 'components/loading-placeholders/LoadingMoviePlaceholder';
import Button from 'components/Button';
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
        <div className="flex flex-no-wrap max-w-full overflow-x-scroll overflow-y-hidden pb-4 -mb-3 space-x-2 px-1">
          {selectedGenres.length ? (
            <button
              className="p-2 px-3 rounded-full bg-gray-800 focus:outline-none"
              onClick={() => setSelectedGenres([])}
            >
              <Icon name="cross" className="w-4 h-4" />
            </button>
          ) : null}
          {genres.map((item) => (
            <Button
              key={item.id}
              onClick={() => updateGenres(item.id)}
              variant={selectedGenres.includes(item.id) ? 'secondary' : 'primary'}
            >
              {item.name}
            </Button>
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
          <Button variant="secondary" size="lg" loading={isLoadingMore} onClick={() => setSize(size + 1)}>
            Load More
          </Button>
        </div>
      ) : null}
    </>
  );
};

export default InfiniteLoadingList;

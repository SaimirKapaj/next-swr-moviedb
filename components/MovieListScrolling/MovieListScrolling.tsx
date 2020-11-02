import React from 'react';

import MovieItem from 'components/MovieItem';
import LoadingMoviePlaceholder from 'components/loading-placeholders/LoadingMoviePlaceholder';
import Link from 'next/link';

interface Genres {
  id: number;
  name: string;
}

interface Props {
  category: 'movie' | 'tv';
  data: any;
  genres: Genres[];
}

const MovieListScrolling = ({ category, data, genres }: Props) => {
  return (
    <div className="overflow-hidden relative">
      <div className="bg-gradient-to-r from-transparent opacity-75 to-white w-32 h-full absolute right-0 z-30" />
      <div className="flex flex-no-wrap max-w-full overflow-x-scroll overflow-y-hidden pb-4 -mb-3">
        {data?.results
          ? data?.results?.map((movie) => (
              <div key={movie.id} className="flex-none mr-6 w-3/4 sm:w-1/2 lg:w-1/4 xl:w-1/5">
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
            ))
          : [...Array(5)].map((_, index) => (
              <div key={index} className="flex-none mr-6 w-3/4 sm:w-1/2 lg:w-1/4 xl:w-1/5">
                <LoadingMoviePlaceholder delay={index} />
              </div>
            ))}
      </div>
    </div>
  );
};

export default MovieListScrolling;

import { MediaType, GenresList, Results } from 'types';
import MovieItem from 'components/MovieItem';
import LoadingMoviePlaceholder from 'components/loading-placeholders/LoadingMoviePlaceholder';
import Link from 'next/link';

interface Props extends GenresList {
  mediaType: MediaType;
  data: Results;
}

const MovieListScrolling = ({ mediaType, data, genres }: Props) => (
  <div className="overflow-hidden relative">
    <div className="flex flex-no-wrap max-w-full overflow-x-scroll overflow-y-hidden pb-4 -mb-3">
      <div className="bg-gradient-to-r from-transparent opacity-75 to-black w-32 h-full absolute right-0 z-30 -m-1 pointer-events-none" />
      {data?.results
        ? data?.results?.map((movie) => (
            <div key={movie.id} className="flex-none mr-6 w-3/4 sm:w-1/2 lg:w-1/4 xl:w-1/5">
              <Link href={`/${mediaType}/${movie.id}`}>
                <a>
                  <MovieItem details={movie} genres={genres} />
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

export default MovieListScrolling;

import { useState } from 'react';
import useSWR from 'swr';

import Layout from 'components/Layout';
import LoadingMoviePlaceholder from 'components/loading-placeholders/LoadingMoviePlaceholder';
import MovieItem from 'components/MovieItem';

const HomePage = () => {
  const [trendingType, setTrendingType] = useState('day');
  const { data: trendingMovies, error, revalidate: revalidateTrendingMovies } = useSWR(
    `trending/movie/${trendingType}`
  );
  const { data: trendingTvShows, revalidate: revalidateTrendingTvShows } = useSWR(`trending/tv/${trendingType}`);
  const { data: trendingPeople, revalidate: revalidatePeople } = useSWR(`trending/person/${trendingType}`);
  const { data: movieGeners } = useSWR(`genre/movie/list`);

  if (error) return <div>failed to load</div>;
  return (
    <Layout>
      <div className="flex items-center justify-between my-5">
        <h1 className="text-xl">Trending Movies</h1>
        <div>
          <button
            className={`text-sm focus:outline-none border-b-2 border-transparent mr-2 ${
              trendingType === 'day' ? ' border-red-600' : ''
            }`}
            onClick={() => {
              setTrendingType('day');
              revalidateTrendingMovies();
            }}
          >
            Today
          </button>
          <button
            className={`text-sm focus:outline-none border-b-2 border-transparent ${
              trendingType === 'week' ? ' border-red-600' : ''
            }`}
            onClick={() => {
              setTrendingType('week');
              revalidateTrendingMovies();
            }}
          >
            This Week
          </button>
        </div>
      </div>

      <div className="overflow-hidden relative">
        <div className="bg-gradient-to-r from-transparent opacity-75 to-white w-32 h-full absolute right-0 z-30" />
        <div className="flex flex-no-wrap max-w-full overflow-x-scroll overflow-y-hidden pb-4 -mb-4">
          {trendingMovies && movieGeners
            ? trendingMovies?.results?.map((movie) => (
                <MovieItem
                  key={movie.id}
                  image={movie.backdrop_path}
                  title={movie.name ?? movie.title}
                  vote={movie.vote_average}
                  genres={movieGeners?.genres.filter((genre) => movie.genre_ids.includes(genre.id))}
                />
              ))
            : [...Array(5)].map((_, index) => <LoadingMoviePlaceholder delay={index} key={index} />)}
        </div>
      </div>
      <div className="flex items-center justify-between my-5 mt-8">
        <h1 className="text-xl">Trending Tv Shows</h1>
        <div>
          <button
            className={`text-sm focus:outline-none border-b-2 border-transparent mr-2 ${
              trendingType === 'day' ? ' border-red-600' : ''
            }`}
            onClick={() => {
              setTrendingType('day');
              revalidateTrendingTvShows();
            }}
          >
            Today
          </button>
          <button
            className={`text-sm focus:outline-none border-b-2 border-transparent ${
              trendingType === 'week' ? ' border-red-600' : ''
            }`}
            onClick={() => {
              setTrendingType('week');
              revalidateTrendingTvShows();
            }}
          >
            This Week
          </button>
        </div>
      </div>

      <div className="overflow-hidden relative">
        <div className="bg-gradient-to-r from-transparent opacity-75 to-white w-32 h-full absolute right-0 z-30" />
        <div className="flex flex-no-wrap max-w-full overflow-x-scroll overflow-y-hidden pb-4 -mb-4">
          {trendingTvShows && movieGeners
            ? trendingTvShows?.results?.map((movie) => (
                <MovieItem
                  key={movie.id}
                  image={movie.backdrop_path}
                  title={movie.name ?? movie.title}
                  vote={movie.vote_average}
                  genres={movieGeners?.genres.filter((genre) => movie.genre_ids.includes(genre.id))}
                />
              ))
            : [...Array(5)].map((_, index) => <LoadingMoviePlaceholder delay={index} key={index} />)}
        </div>
      </div>
      {/* <pre>{JSON.stringify(movieGeners, null, 2)}</pre> */}
      {/* <pre>{JSON.stringify(trendingPeople, null, 2)}</pre> */}
    </Layout>
  );
};

export default HomePage;

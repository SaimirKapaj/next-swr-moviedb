import React from 'react';
import useSWR from 'swr';

import { GenresContext } from 'context/genres';
import Layout from 'components/Layout';
import MovieListScrolling from 'components/MovieListScrolling';
import TitleWithMoreButton from 'components/TitleWithMoreButton';

const MoviePage = () => {
  const { movieGenres } = React.useContext(GenresContext);
  const { data: nowPlawing } = useSWR(`movie/now_playing`);
  const { data: upcoming } = useSWR(`movie/upcoming`);
  const { data: popular } = useSWR(`movie/popular`);
  const { data: topRated } = useSWR(`movie/top_rated`);

  return (
    <Layout>
      <TitleWithMoreButton href="/movie/now-playing" title="Now Playing" />
      <MovieListScrolling category="movie" data={nowPlawing} genres={movieGenres} />
      <div className="mt-12">
        <TitleWithMoreButton href="/movie/upcoming" title="Upcoming" />
        <MovieListScrolling category="movie" data={upcoming} genres={movieGenres} />
      </div>
      <div className="mt-12">
        <TitleWithMoreButton href="/movie/popular" title="Popular" />
        <MovieListScrolling category="movie" data={popular} genres={movieGenres} />
      </div>
      <div className="mt-12">
        <TitleWithMoreButton href="/movie/top-rated" title="Top Rated" />
        <MovieListScrolling category="movie" data={topRated} genres={movieGenres} />
      </div>
    </Layout>
  );
};

export default MoviePage;

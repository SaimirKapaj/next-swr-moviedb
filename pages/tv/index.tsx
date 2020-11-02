import React from 'react';
import useSWR from 'swr';

import { GenresContext } from 'context/genres';
import Layout from 'components/Layout';
import MovieListScrolling from 'components/MovieListScrolling';
import TitleWithMoreButton from 'components/TitleWithMoreButton';

const TvPage = () => {
  const { tvGenres } = React.useContext(GenresContext);
  const { data: airingToday } = useSWR(`tv/airing_today`);
  const { data: onTheAir } = useSWR(`tv/on_the_air`);
  const { data: popular } = useSWR(`tv/popular`);
  const { data: topRated } = useSWR(`tv/top_rated`);

  return (
    <Layout>
      <TitleWithMoreButton href="/tv/airing-today" title="Airing Today" />
      <MovieListScrolling category="tv" data={airingToday} genres={tvGenres} />
      <div className="mt-12">
        <TitleWithMoreButton href="/tv/on-the-air" title="On the air" />
        <MovieListScrolling category="tv" data={onTheAir} genres={tvGenres} />
      </div>
      <div className="mt-12">
        <TitleWithMoreButton href="/tv/popular" title="Popular" />
        <MovieListScrolling category="tv" data={popular} genres={tvGenres} />
      </div>
      <div className="mt-12">
        <TitleWithMoreButton href="/tv/top-rated" title="Top Rated" />
        <MovieListScrolling category="tv" data={topRated} genres={tvGenres} />
      </div>
    </Layout>
  );
};

export default TvPage;

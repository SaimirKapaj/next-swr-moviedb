import React from 'react';
import useSWR from 'swr';

export const GenresContext = React.createContext(undefined);

export const GenresProvider = ({ children }) => {
  const { data: movieGenersData } = useSWR(`genre/movie/list`);
  const { data: tvShowGenersData } = useSWR(`genre/tv/list`);
  const [movieGenres, setMovieGenres] = React.useState([]);
  const [tvGenres, setTvGenres] = React.useState([]);

  React.useEffect(() => {
    if (movieGenersData) setMovieGenres(movieGenersData.genres);
    if (tvShowGenersData) setTvGenres(tvShowGenersData.genres);
  }, [movieGenersData, tvShowGenersData]);

  return (
    <GenresContext.Provider
      value={{
        movieGenres,
        tvGenres
      }}
    >
      {children}
    </GenresContext.Provider>
  );
};

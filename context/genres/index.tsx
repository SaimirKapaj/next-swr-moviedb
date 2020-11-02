import React from 'react';
import useSWR from 'swr';

const GenresContext = React.createContext(undefined);

const GenresProvider = ({ children }) => {
  const { data: movieGenersData } = useSWR(`genre/movie/list`);
  const { data: tvShowGenersData } = useSWR(`genre/movie/list`);
  const [movieGenres, setMovieGenres] = React.useState([]);
  const [tvShowGenres, setTvShowGenres] = React.useState([]);

  React.useEffect(() => {
    if (movieGenersData) setMovieGenres(movieGenersData.genres);
    if (tvShowGenersData) setTvShowGenres(tvShowGenersData.genres);
  }, [movieGenersData, tvShowGenersData]);

  return (
    <GenresContext.Provider
      value={{
        movieGenres,
        tvShowGenres
      }}
    >
      {children}
    </GenresContext.Provider>
  );
};

export { GenresProvider, GenresContext };
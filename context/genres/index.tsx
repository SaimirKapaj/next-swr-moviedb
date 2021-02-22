import React from 'react';
import useSWR from 'swr';

import { GenresList, Genre } from 'types';

interface GenresContextType {
  movieGenres: Genre[];
  tvGenres: Genre[];
}

export const GenresContext = React.createContext<GenresContextType>(undefined);

export const GenresProvider = ({ children }) => {
  const { data: movieGenersData } = useSWR<GenresList>(`genre/movie/list`);
  const { data: tvShowGenersData } = useSWR<GenresList>(`genre/tv/list`);
  const [movieGenres, setMovieGenres] = React.useState<Genre[]>([]);
  const [tvGenres, setTvGenres] = React.useState<Genre[]>([]);

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

export const useGenres = () => {
  const context = React.useContext(GenresContext);
  if (context === undefined) {
    throw new Error('useGenres must be used within a GenresProvider');
  }
  return context;
};

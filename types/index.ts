
export type MediaType = 'movie' | 'tv';

export interface Genre {
  id: number;
  name: string;
}

export interface GenresList {
  genres: Genre[];
}

export interface Movie extends GenresList {
  id: number;
  title: string;
  name: string;
  original_title: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
  runtime: number;
  genre_ids: Genre[];
}

export interface Cast {
  id: number;
  credit_id?: number;
  name: string;
  profile_path: string;
}

export interface Crew {
  job: string;
  name: string;
  credit_id: number;
}

export interface Credits {
  id: number;
  cast: Cast[];
  crew: Crew[];
}

export interface Details extends Movie {
  directors: Crew[];
  actors: Cast[];
}

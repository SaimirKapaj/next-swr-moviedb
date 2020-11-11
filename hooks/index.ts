import React from 'react';
import useSWR, { useSWRInfinite } from 'swr';

import { MediaType, Movie, Credits, Details, Results } from 'types';

export const useDetails = (mediaType: MediaType, id: string | string[]) => {
  const { data: media, error: errorMedia } = useSWR<Movie>(`${mediaType}/${id}`);
  const { data: mediaCredits, error: errorMediaCredits } = useSWR<Credits>(`${mediaType}/${id}/credits`);

  const directors = mediaCredits?.crew?.filter((member) => member.job === 'Director');

  const details: Details = {
    ...media,
    directors,
    actors: mediaCredits?.cast
  };

  const error = errorMedia || errorMediaCredits;

  return { details, error };
};

export const useInfiniteLoading = (url: string) => {
  const { data, error, size, setSize } = useSWRInfinite<Results>((index) => `${url}?page=${index + 1}`);

  const isLoadingInitialData = !data && !error;
  const isLoadingMore = isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isLoadedAll = data && size === data[0]?.total_pages;

  return {
    data,
    error,
    size,
    setSize,
    isLoadingMore,
    isLoadedAll
  };
};

export const useLocalStorage = <T>(key: string, initial: T) => {
  const [value, setValue] = React.useState(() => {
    if (typeof window !== 'undefined') {
      const storedValue = window.localStorage.getItem(key);

      if (storedValue !== null) {
        return JSON.parse(storedValue);
      }
    }

    return initial;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

import React from 'react';
import useSWR, { useSWRInfinite } from 'swr';

import { Movie, Credits, Details } from 'types';

const isWindow = typeof window !== 'undefined';

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = React.useState<T>(() => {
    try {
      const item = isWindow && window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value: T): void => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (isWindow) {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};

export const useDetails = (mediaType: 'movie' | 'tv', id: string | string[]) => {
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
  const { data, error, size, setSize } = useSWRInfinite((index) => `${url}?page=${index + 1}`);

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

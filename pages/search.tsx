import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useSWR from 'swr';

import { GenresContext } from 'context/genres';
import Layout from 'components/Layout';
import MovieItem from 'components/MovieItem';
import LoadingMoviePlaceholder from 'components/loading-placeholders/LoadingMoviePlaceholder';

type MediaType = 'movie' | 'tv';

const SearchPage = () => {
  const { movieGenres, tvGenres } = React.useContext(GenresContext);
  const { query } = useRouter();
  const { data } = useSWR(`search/multi?query=${query.q}`);

  const media: { [key in MediaType] } = {
    tv: movieGenres,
    movie: tvGenres
  };

  const results = data?.results?.sort((a, b) => b.popularity - a.popularity);

  return (
    <Layout>
      <div className="flex items-center justify-between my-5">
        <h1 className="text-xl flex items-center">Results for: {query.q}</h1>
      </div>
      <div className="flex flex-wrap -mx-3 mt-6">
        {results
          ? results.map((item) => (
              <React.Fragment key={item?.id}>
                {item?.media_type !== 'person' ? (
                  <div className="flex-none p-3 w-full sm:w-1/2 lg:w-1/4 xl:w-1/5">
                    <Link href={`/${item?.media_type}/${item?.id}`}>
                      <a>
                        <MovieItem
                          image={item?.backdrop_path}
                          title={item?.name ?? item.title}
                          vote={item?.vote_average}
                          genres={media[item.media_type].filter((genre) => item?.genre_ids?.includes(genre.id))}
                        />
                      </a>
                    </Link>
                  </div>
                ) : null}
              </React.Fragment>
            ))
          : [...Array(5)].map((_, index) => (
              <div key={index} className="flex-none p-1 w-full sm:w-1/2 lg:w-1/4 xl:w-1/5">
                <LoadingMoviePlaceholder delay={index} />
              </div>
            ))}
      </div>
    </Layout>
  );
};

export default SearchPage;
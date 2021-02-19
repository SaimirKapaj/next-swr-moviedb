import { Movie, Genre } from 'types';

interface Props {
  details: Movie;
  genres: Genre[];
}

const MovieItem = ({ details, genres }: Props) => (
  <div className="h-full relative rounded-lg overflow-hidden shadow-sm">
    {details?.backdrop_path ? (
      <img className="object-cover w-full h-56" src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${details?.backdrop_path}`} />
    ) : (
      <div className="w-full h-56 bg-gray-700" />
    )}
    <div className="absolute bottom-0 bg-gradient-to-t from-black via-transparent to-transparent h-full w-full" />
    <div className="absolute top-0 right-0 flex items-center justify-center mr-2 mt-2 border border-gray-600 w-8 h-8 rounded-full overflow-hidden">
      <span className="text-gray-300 text-sm z-10">{details?.vote_average}</span>
      <div className="absolute h-full w-full bg-black opacity-75" />
    </div>
    <div className="p-4 absolute bottom-0 h-full w-full">
      <div className="flex items-end h-full">
        <div>
          <p className="text-white overflow-hidden font-semibold">{details?.name ?? details?.title}</p>
          <div className="flex flex-wrap mt-1">
            {genres
              .filter((genre) => (details?.genre_ids ?? details?.genres)?.includes(genre.id as any))
              .map((genre, index) => (
                <span key={genre.id} className="flex items-center text-gray-400 text-sm overflow-hidden mr-2">
                  {genre.name}
                  <span
                    className={`w-2 h-2 bg-gray-600 rounded-full ml-2 ${
                      index < genres.length - 1 ? 'inline-block' : 'hidden'
                    }`}
                  />
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MovieItem;

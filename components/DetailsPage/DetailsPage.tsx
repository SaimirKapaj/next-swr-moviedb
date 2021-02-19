import { useLocalStorage } from 'hooks';
import { Details, MyListMovie } from 'types';
import Icon from 'components/Icon';
import ButtonBack from 'components/ButtonBack';
import LoadingDetailsPagePlaceholder from 'components/loading-placeholders/LoadingDetailsPagePlaceholder';

interface Props {
  details: Details;
}

const DetailsPage = ({ details }: Props) => {
  const [myList, setMyList] = useLocalStorage<MyListMovie[]>('myList', []);

  const isInMyList = myList.some((item) => item.id === details.id);

  console.log(isInMyList);

  const addToList = () => {
    const listItem: MyListMovie = {
      media_type: details.media_type,
      id: details.id,
      backdrop_path: details.backdrop_path,
      name: details.name,
      vote_average: details.vote_average,
      genre_ids: details?.genres.map((genre) => genre.id)
    };

    if (!isInMyList && !!Object.keys(listItem).length) {
      setMyList([...myList, listItem]);
    } else {
      const newList = myList.filter((item) => item.id !== details.id);
      setMyList(newList);
    }
  };

  return (
    <div className="max-w-screen-md mx-auto">
      <div className="mt-4">
        <ButtonBack />
      </div>

      {details ? (
        <div className="flex flex-col mt-8 mb-6 bg-gray-800 rounded-lg overflow-hidden">
          <div className="w-full">
            <div className="relative">
              <button
                onClick={addToList}
                className="absolute right-0 flex items-center justify-center mr-3 mt-3 w-10 h-10 rounded-full overflow-hidden focus:outline-none"
              >
                <span className={`text-sm z-10 ${isInMyList ? 'text-red-600' : 'text-gray-500'}`}>
                  <Icon name="heart" className="w-4" />
                </span>
                <div className="absolute h-full w-full bg-black opacity-75"></div>
              </button>
              {details?.backdrop_path ? (
                <img
                  className="object-cover w-full"
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${details?.backdrop_path}`}
                />
              ) : (
                <div className="flex items-center justify-center rounded-lg w-full bg-gray-800 h-64 text-gray-900">
                  <Icon name="picture" className="w-24 h-24" />
                </div>
              )}
            </div>
          </div>
          <div className="w-full p-6">
            <div className="flex justify-between">
              <h1 className="md:text-2xl text-xl font-semibold">{details?.title || details?.name}</h1>
              <div className="flex items-center mt-1">
                <Icon className="w-5 text-blue-500" name="star" />
                <span className="font-semibold ml-2">{details?.vote_average} / 10</span>
              </div>
            </div>
            {details?.genres?.map((genre, index) => (
              <span key={index}>
                {genre.name}
                {index < details?.genres.length - 1 && ','}{' '}
              </span>
            ))}

            <h3 className="mt-10 mb-1 font-semibold text-lg">Overview</h3>
            <p>{details?.overview}</p>

            {!!details?.directors?.length ? <h3 className="mt-4 mb-1 font-semibold text-lg">Director</h3> : null}
            {details?.directors?.map((director, index) => (
              <span key={index}>
                {director.name}
                {index < details?.directors.length - 1 && ','}{' '}
              </span>
            ))}
          </div>
          {details?.actors ? (
            <div className="p-6">
              <h3 className="font-semibold text-lg mt-0 mb-4">Cast</h3>
              <div className="overflow-hidden relative w-full">
                <div className="flex flex-no-wrap max-w-full overflow-x-scroll overflow-y-hidden pb-12 -mb-3">
                  {details?.actors.map((actor) => (
                    <div className="w-24 h-24 mr-4 flex-none" key={actor.id}>
                      {actor?.profile_path ? (
                        <img
                          className="w-24 h-24 object-cover rounded-full"
                          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${actor?.profile_path}`}
                        />
                      ) : (
                        <div className="flex items-center justify-center w-24 h-24 bg-gray-300 text-gray-400 rounded-full">
                          <Icon name="user" className="w-10 h-10" />
                        </div>
                      )}
                      <h3 className="mt-2 text-center">{actor?.name}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      ) : (
        <LoadingDetailsPagePlaceholder />
      )}
    </div>
  );
};

export default DetailsPage;

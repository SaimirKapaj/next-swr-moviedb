import { Details } from 'types';
import Icon from 'components/Icon';
import ButtonBack from 'components/ButtonBack';
import LoadingDetailsPagePlaceholder from 'components/loading-placeholders/LoadingDetailsPagePlaceholder';
import LoadingCastPlaceholder from 'components/loading-placeholders/LoadingCastPlaceholder';

interface Props {
  details: Details;
}

const DetailsPage = ({ details }: Props) => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="mt-4">
        <ButtonBack />
      </div>

      {details ? (
        <div className="flex flex-col md:flex-row mt-8 mb-6">
          <div className="md:w-1/4 w-full">
            {details?.backdrop_path ? (
              <img
                className="object-cover w-full h-64 rounded-lg"
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${details?.backdrop_path}`}
              />
            ) : (
              <div className="flex items-center justify-center rounded-lg w-full bg-gray-300 h-64 text-gray-400">
                <Icon name="picture" className="w-24 h-24" />
              </div>
            )}
            <button className="w-full bg-teal-500 hover:bg-teal-600 rounded-lg mt-4 p-3 text-white shadow focus:outline-none">
              Trailer
            </button>
          </div>
          <div className="w-full md:w-2/3 md:ml-6 mt-6 md:mt-0">
            <h1 className="md:text-2xl text-xl font-semibold">{details?.title || details?.name}</h1>
            {details?.genres?.map((genre, index) => (
              <span key={index}>
                {genre.name}
                {index < details?.genres.length - 1 && ','}{' '}
              </span>
            ))}
            <div className="flex items-center mt-1">
              <Icon className="w-5 text-teal-600" name="star" />
              <span className="font-semibold ml-2">{details?.vote_average} / 10</span>
            </div>

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
        </div>
      ) : (
        <LoadingDetailsPagePlaceholder />
      )}
      {details?.actors ? (
        <>
          <h3 className="font-semibold text-lg mt-12 mb-4">Cast</h3>
          <div className="overflow-hidden relative w-full">
            <div className="flex flex-no-wrap max-w-full overflow-x-scroll overflow-y-hidden pb-12 -mb-3">
              {details?.actors.map((actor) => (
                <div className="w-32 h-32 mr-4 flex-none" key={actor.id}>
                  {actor?.profile_path ? (
                    <img
                      className="w-32 h-32 object-cover rounded-full"
                      src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${actor?.profile_path}`}
                    />
                  ) : (
                    <div className="flex items-center justify-center w-32 h-32 bg-gray-300 text-gray-400 rounded-full">
                      <Icon name="user" className="w-16 h-16" />
                    </div>
                  )}
                  <h3 className="mt-2 text-center">{actor?.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <LoadingCastPlaceholder />
      )}
    </div>
  );
};

export default DetailsPage;

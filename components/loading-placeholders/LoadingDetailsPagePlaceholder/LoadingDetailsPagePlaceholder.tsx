import LoadingCastPlaceholder from 'components/loading-placeholders/LoadingCastPlaceholder';

const LoadingDetailPagePlaceholder = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg flex flex-col mt-8 mb-6">
      <div className="w-full">
        <div className="animate-pulse bg-gray-900 rounded-lg w-full h-64" />
      </div>
      <div className="w-full mt-6 animate-pulse">
        <div className="h-8 w-1/3 bg-gray-900 mb-3 rounded" />
        <div className="h-4 w-1/6 bg-gray-900 mb-3 rounded" />
        <div className="h-4 w-1/6 bg-gray-900 mb-10 rounded" />
        <div className="h-6 w-1/4 bg-gray-900 mb-4 rounded" />
        <div className="h-4 w-full bg-gray-900 mb-2 rounded" />
        <div className="h-4 w-full bg-gray-900 mb-2 rounded" />
        <div className="h-4 w-5/6 bg-gray-900 rounded" />
      </div>
      <LoadingCastPlaceholder />
    </div>
  );
};

export default LoadingDetailPagePlaceholder;

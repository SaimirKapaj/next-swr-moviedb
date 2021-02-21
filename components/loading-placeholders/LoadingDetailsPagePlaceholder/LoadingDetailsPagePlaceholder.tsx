import LoadingCastPlaceholder from 'components/loading-placeholders/LoadingCastPlaceholder';

const LoadingDetailPagePlaceholder = () => {
  return (
    <div className="flex flex-col mt-8 mb-6">
      <div className="w-full">
        <div className="animate-pulse bg-gray-800 rounded-lg w-full h-64" />
      </div>
      <div className="w-full animate-pulse p-6 mt-4">
        <div className="h-8 w-1/3 bg-gray-800 mb-3 rounded" />
        <div className="h-4 w-1/6 bg-gray-800 mb-3 rounded" />
        <div className="h-4 w-1/6 bg-gray-800 mb-10 rounded" />
        <div className="h-6 w-1/4 bg-gray-800 mb-4 rounded" />
        <div className="h-4 w-full bg-gray-800 mb-2 rounded" />
        <div className="h-4 w-full bg-gray-800 mb-2 rounded" />
        <div className="h-4 w-5/6 bg-gray-800 rounded" />
        <div className="">
          <div className="bg-gray-800 h-6 w-24 mt-12 mb-6 rounded" />
          <div className="overflow-hidden relative w-full">
            <div className="flex flex-no-wrap max-w-full overflow-x-scroll overflow-y-hidden pb-12 -mb-3">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="w-24 h-24 mr-4 flex-none">
                  <div className="w-24 h-24 bg-gray-800 text-gray-800 rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingDetailPagePlaceholder;

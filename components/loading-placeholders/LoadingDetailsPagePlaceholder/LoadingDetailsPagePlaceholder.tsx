const LoadingDetailPagePlaceholder = () => {
  return (
    <div className="animate-pulse flex flex-col md:flex-row mt-8 mb-6">
      <div className="md:w-1/4 w-full">
        <div className="bg-gray-300 rounded-lg w-full h-40" />
        <div className="w-full bg-gray-300 hover:bg-teal-600 rounded-lg mt-4 h-12 text-white focus:outline-none" />
      </div>
      <div className="w-full md:w-2/3 md:ml-6 mt-6 md:mt-0">
        <div className="h-8 w-1/3 bg-gray-300 mb-3 rounded" />
        <div className="h-4 w-1/6 bg-gray-300 mb-3 rounded" />
        <div className="h-4 w-1/6 bg-gray-300 mb-10 rounded" />
        <div className="h-6 w-1/4 bg-gray-300 mb-4 rounded" />
        <div className="h-4 w-full bg-gray-300 mb-2 rounded" />
        <div className="h-4 w-full bg-gray-300 mb-2 rounded" />
        <div className="h-4 w-5/6 bg-gray-300 rounded" />
      </div>
    </div>
  );
};

export default LoadingDetailPagePlaceholder;

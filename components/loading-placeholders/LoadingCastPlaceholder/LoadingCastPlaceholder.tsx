import React from 'react';

const LoadingCastPlaceholder = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-300 h-4 w-32 mt-16 mb-4 rounded" />
      <div className="overflow-hidden relative w-full">
        <div className="flex flex-no-wrap max-w-full overflow-x-scroll overflow-y-hidden pb-12 -mb-3">
          {[...Array(9)].map((_, index) => (
            <div className="w-32 h-32 mr-4 flex-none">
              <div className="w-32 h-32 bg-gray-300 text-gray-400 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingCastPlaceholder;

import React from 'react';

const LoadingCastPlaceholder = () => {
  return (
    <div className="animate-pulse mt-3">
      <div className="bg-gray-900 h-6 w-24 mt-12 mb-6 rounded" />
      <div className="overflow-hidden relative w-full">
        <div className="flex flex-no-wrap max-w-full overflow-x-scroll overflow-y-hidden pb-12 -mb-3">
          {[...Array(9)].map((_, index) => (
            <div key={index} className="w-24 h-24 mr-4 flex-none">
              <div className="w-24 h-24 bg-gray-900 text-gray-800 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingCastPlaceholder;

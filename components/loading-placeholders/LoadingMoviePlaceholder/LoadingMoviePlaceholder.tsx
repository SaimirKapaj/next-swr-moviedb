interface Props {
  delay: number;
}

const LoadingMoviePlaceholder = ({ delay }: Props) => (
  <div className="animate-pulse rounded-lg" style={{ animationDelay: `${delay * 100}ms` }}>
    <div className="w-full h-56 bg-gray-800 rounded-lg p-4 flex flex-col justify-end relative">
      <div className="w-8 h-8 bg-gray-800 rounded-full absolute top-0 right-0 mr-4 mt-4" />
      <div>
        <div className="w-3/4 h-4 mt-2 bg-gray-900 rounded-lg" />
        <div className="w-1/2 h-4 mt-2 bg-gray-900 rounded-lg" />
      </div>
    </div>
  </div>
);

export default LoadingMoviePlaceholder;

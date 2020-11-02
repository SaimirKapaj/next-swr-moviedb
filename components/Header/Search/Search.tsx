import Icon from 'components/Icon';

const Search = () => {
  return (
    <button className="cursor-pointer flex items-center p-2 px-3  bg-gray-200 rounded-lg shadow focus:outline-none sm:w-48 w-full">
      <Icon name="search" className="w-5 mr-2" />
      <span className="text-gray-600">Search</span>
    </button>
  );
};

export default Search;

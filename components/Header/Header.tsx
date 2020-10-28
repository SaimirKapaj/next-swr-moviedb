import Icon from 'components/Icon/Icon';
import Nav from './Nav/Nav';

const Header = () => {
  return (
    <header className="border-b border-gray-300">
      <div className="flex items-center justify-between px-4 md:px-8 py-6">
        <Nav />
        <button className="cursor-pointer flex items-center p-2 px-3 border border-gray-300 bg-gray-100 rounded-full focus:outline-none sm:w-64 w-full">
          <Icon name="search" className="w-5 mr-2" />
          <span className="text-gray-600">Search</span>
        </button>
      </div>
    </header>
  );
};

export default Header;

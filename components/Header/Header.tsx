import Nav from 'components/Nav';
import Search from 'components/SearchBar';

const Header = () => {
  return (
    <header className="sm:border-b sm:border-gray-300">
      <div className="flex items-center justify-between px-4 md:px-8 py-4 sm:py-6">
        <Nav />
        <Search />
      </div>
    </header>
  );
};

export default Header;

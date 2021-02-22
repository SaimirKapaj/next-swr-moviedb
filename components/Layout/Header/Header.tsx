import Nav from 'components/Layout/Nav';
import Search from 'components/Layout/SearchBar';

const Header = () => (
  <header className="sm:border-b sm:border-gray-800">
    <div className="flex items-center justify-between px-4 md:px-8 py-4 sm:py-6">
      <Nav />
      <Search />
    </div>
  </header>
);

export default Header;

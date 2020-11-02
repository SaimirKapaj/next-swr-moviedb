import Icon from 'components/Icon/Icon';
import Nav from './Nav/Nav';
import Search from './Search/Search';

const Header = () => {
  return (
    <header className="border-b border-gray-300">
      <div className="flex items-center justify-between px-4 md:px-8 py-6">
        <Nav />
        <Search />
      </div>
    </header>
  );
};

export default Header;

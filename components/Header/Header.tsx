import { useState } from 'react';
import Icon from 'components/Icon/Icon';
import Logo from './Logo';
import Nav from './Nav/Nav';

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="flex items-center justify-between px-4 md:px-8 py-4">
      <Nav open={openNav} close={() => setOpenNav(false)} />
      <div className="cursor-pointer" onClick={() => setOpenNav(true)}>
        <Icon name="menu" className="w-6" />
      </div>
      <div className="text-center">
        <Logo />
      </div>
      <div className="cursor-pointer">
        <Icon name="search" className="w-6" />
      </div>
    </div>
  );
};

export default Header;

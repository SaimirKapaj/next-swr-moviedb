import Link from 'next/link';
import Icon from 'components/Icon';
import { IconType } from 'components/Icon';
import { useRouter } from 'next/router';

interface NavItem {
  title: string;
  slug: string;
  icon: IconType;
}

const navItems: NavItem[] = [
  {
    title: 'Movies',
    slug: '/movie',
    icon: 'movies'
  },
  {
    title: 'Tv Shows',
    slug: '/tv',
    icon: 'tv'
  },
  {
    title: 'My List',
    slug: '/my-list',
    icon: 'plus'
  }
];

const Nav = () => {
  const { pathname } = useRouter();

  return (
    <nav className="flex fixed bottom-0 left-0 bg-gray-900 z-10 p-4 w-full justify-between border-t border-gray-800 sm:w-auto sm:relative sm:border-0 sm:justify-start sm:p-0">
      {navItems.map((item) => (
        <div key={item.title}>
          <Link href={item.slug}>
            <a
              className={`flex flex-col justify-end items-center hover:text-blue-500 sm:text-xl sm:mr-6 sm:flex-row sm:justify-center ${
                pathname.includes(item.slug) && 'text-blue-500'
              }`}
            >
              <Icon name={item.icon} className="w-5 mb-1 h-5 sm:mr-2 sm:mb-0" />
              <span>{item.title}</span>
            </a>
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default Nav;

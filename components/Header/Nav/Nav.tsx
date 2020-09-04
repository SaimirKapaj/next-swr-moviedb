import Link from 'next/link';
import Icon from 'components/Icon';
import { IconType } from 'components/Icon';

interface Item {
  title: string;
  slug: string;
}

interface NavItem extends Item {
  icon: IconType;
  subitems?: Item[];
}

const navItems: NavItem[] = [
  {
    title: 'Home',
    slug: '/',
    icon: 'home'
  },
  {
    title: 'Movies',
    slug: '/movies',
    icon: 'movies',
    subitems: [
      {
        title: 'Top Rated',
        slug: '/movies/top-rated'
      },
      {
        title: 'Popular',
        slug: '/movies/popular'
      },
      {
        title: 'Now Playing',
        slug: '/movies/now-playing'
      },
      {
        title: 'Upcoming',
        slug: '/movies/upcoming'
      }
    ]
  },
  {
    title: 'Tv Shows',
    slug: '/tv-shows',
    icon: 'tv',
    subitems: [
      {
        title: 'Top Rated',
        slug: '/tv-shows/top-rated'
      },
      {
        title: 'Popular',
        slug: '/tv-shows/popular'
      },
      {
        title: 'Now Playing',
        slug: '/tv-shows/now-playing'
      },
      {
        title: 'Upcoming',
        slug: '/tv-shows/upcoming'
      }
    ]
  },
  {
    title: 'People',
    slug: '/people',
    icon: 'people',
    subitems: [
      {
        title: 'Popular',
        slug: '/people/popular'
      }
    ]
  }
];

const Nav = ({ open, close }) => {
  return (
    <>
      {open && (
        <>
          <div className="bg-black opacity-25 w-full h-full top-0 left-0 z-40 fixed" onClick={close} />
          <div className="bg-white w-64 h-full fixed top-0 left-0 z-50 pl-4 md:pl-8 py-4">
            <div className="cursor-pointer inline-block mt-2" onClick={close}>
              <Icon name="cross" className="w-6" />
            </div>
            <div className="overflow-auto mt-12 h-full">
              <nav className="flex flex-col">
                {navItems.map((item) => (
                  <div key={item.title}>
                    <Link href={item.slug}>
                      <a className="text-xl mb-4 flex items-center hover:text-red-600">
                        <Icon name={item.icon} className="w-5 mr-3" />
                        <span>{item.title}</span>
                      </a>
                    </Link>
                    {item.subitems && (
                      <div className="ml-8">
                        {item.subitems.map((subitem) => (
                          <Link href={subitem.slug} key={subitem.title}>
                            <a className="text-base mb-4 flex items-center hover:text-red-600">
                              <span>{subitem.title}</span>
                            </a>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Nav;

import Link from 'next/link';

interface Props {
  title: string;
  href: string;
}

const TitleWithMoreButton = ({ title, href }: Props) => {
  return (
    <div className="flex items-center justify-between my-5">
      <h1 className="text-xl">{title}</h1>
      <Link href={href}>
        <button className="hover:text-teal-600 focus:outline-none">More &rarr;</button>
      </Link>
    </div>
  );
};

export default TitleWithMoreButton;

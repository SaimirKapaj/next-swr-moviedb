import { useRouter } from 'next/router';

import Icon from 'components/Icon';

interface Props {
  title: string;
}

const TitleWithBackButton = ({ title }: Props) => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between my-5">
      <h1 className="text-xl flex items-center">
        <button className="focus:outline-none mr-3 hover:text-teal-600" onClick={() => router.back()}>
          <Icon name="arrow-left" className="w-5 h-5" />
        </button>
        {title}
      </h1>
    </div>
  );
};

export default TitleWithBackButton;

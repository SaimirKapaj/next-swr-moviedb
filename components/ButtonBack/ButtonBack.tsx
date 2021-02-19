import { useRouter } from 'next/router';

import Icon from 'components/Icon';

const ButtonBack = () => {
  const router = useRouter();

  return (
    <button className="bg-gray-800 rounded-full p-3 focus:outline-none" onClick={() => router.back()}>
      <Icon name="arrow-left" className="w-4 h-4" />
    </button>
  );
};

export default ButtonBack;

import { useRouter } from 'next/router';

import Icon from 'components/Icon';

const ButtonBack = () => {
  const router = useRouter();

  return (
    <button
      className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-full p-3 focus:outline-none"
      onClick={() => router.back()}
    >
      <Icon name="arrow-left" className="w-4 h-4" />
    </button>
  );
};

export default ButtonBack;

import Icon from 'components/Icon';

const Footer = () => {
  return (
    <div className="p-6 border-t mt-8 border-white sm:border-gray-300">
      <a href="https://github.com/SaimirKapaj/next-swr-moviedb" target="_blank">
        <Icon name="github" className="w-8" />
      </a>
    </div>
  );
};

export default Footer;

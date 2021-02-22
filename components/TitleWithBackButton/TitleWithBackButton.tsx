import ButtonBack from '../ButtonBack/ButtonBack';

interface Props {
  title: string;
}

const TitleWithBackButton = ({ title }: Props) => (
  <div className="flex items-center justify-between my-5">
    <h1 className="text-xl flex items-center">
      <ButtonBack />
      <span className="ml-3">{title}</span>
    </h1>
  </div>
);

export default TitleWithBackButton;

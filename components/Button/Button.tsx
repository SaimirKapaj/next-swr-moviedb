import Icon from 'components/Icon';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'base' | 'lg';
  loading?: boolean;
  className?: string;
}

const buttonVariants = {
  primary: 'bg-gray-800 text-gray-300',
  secondary: 'bg-yellow-500 text-gray-800'
};

const buttonSize = {
  base: 'px-6 py-2',
  lg: 'px-12 py-3'
};

const Button = ({ children, variant = 'primary', size = 'base', loading, className, ...props }: Props) => (
  <button
    className={`flex items-center justify-center rounded-full whitespace-nowrap focus:outline-none ${buttonVariants[variant]} ${buttonSize[size]} ${className}`}
    {...props}
  >
    {loading ? <Icon name="spinner" className="animate-spin w-4 mb-1 h-5 absolute" /> : ''}
    <span className={loading ? 'opacity-0' : 'opacity-100'}>{children}</span>
  </button>
);

export default Button;

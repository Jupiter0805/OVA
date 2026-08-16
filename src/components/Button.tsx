import { ButtonProps } from '../types';

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  disabled = false,
  className = '',
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded transition-all duration-200 cursor-pointer font-sans';

  const variantStyles = {
    primary: 'bg-unicoc-red text-white hover:bg-unicoc-red-dark disabled:bg-gray-400',
    secondary: 'border-2 border-unicoc-red text-unicoc-red hover:bg-unicoc-red hover:text-white disabled:border-gray-400',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

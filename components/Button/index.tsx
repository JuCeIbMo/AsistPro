import { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  className?: string;
  variant?: 'default' | 'outline' | 'accent';
}

const Button = ({ children, className = '', variant = 'default', ...props }: ButtonProps) => {
  const baseClasses = "relative py-3 px-6 rounded-lg font-medium text-sm";
  
  const defaultClasses = "bg-primary-blue-600 hover:bg-primary-blue-700 text-white";
  const outlineClasses = "border border-white text-white hover:bg-white/10";
  const accentClasses = "bg-primary-orange-500 hover:bg-primary-orange-600 text-black";

  return (
    <button 
      className={`${baseClasses} ${
        variant === 'outline' ? outlineClasses : 
        variant === 'accent' ? accentClasses : 
        defaultClasses
      } ${className}`}
      {...props}
    >
      {(variant === 'default' || variant === 'accent') && (
        <div className="absolute inset-0">
          <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
          <div className="rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
          <div className="absolute inset-0 shadow-[0_0_10px_rgb(37,99,235,.5)_inset] rounded-lg"></div>
        </div>
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;

import { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<{
  className?: string;
  variant?: 'default' | 'outline' | 'accent';
  as?: 'button' | 'a';
}> & (ButtonHTMLAttributes<HTMLButtonElement> | AnchorHTMLAttributes<HTMLAnchorElement>);

const Button = ({ children, className = '', variant = 'default', as = 'button', ...props }: ButtonProps) => {
  const baseClasses = "relative py-3 px-6 rounded-lg font-medium text-sm";
  
  const defaultClasses = "bg-primary-blue-600 hover:bg-primary-blue-700 text-white";
  const outlineClasses = "border border-white text-white hover:bg-white/10";
  const accentClasses = "bg-primary-orange-500 hover:bg-primary-orange-600 text-black";

  const buttonClasses = `${baseClasses} ${
    variant === 'outline' ? outlineClasses : 
    variant === 'accent' ? accentClasses : 
    defaultClasses
  } ${className}`;

  const buttonContent = (
    <>
      {(variant === 'default' || variant === 'accent') && !className.includes('bg-white') && (
        <div className="absolute inset-0">
          <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
          <div className="rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
          <div className="absolute inset-0 shadow-[0_0_10px_rgb(37,99,235,.5)_inset] rounded-lg"></div>
        </div>
      )}
      <span className="relative z-50 text-opacity-100">{children}</span>
    </>
  );

  if (as === 'a') {
    return (
      <a className={buttonClasses} {...props as AnchorHTMLAttributes<HTMLAnchorElement>}>
        {buttonContent}
      </a>
    );
  }

  return (
    <button className={buttonClasses} {...props as ButtonHTMLAttributes<HTMLButtonElement>}>
      {buttonContent}
    </button>
  );
};

export default Button;

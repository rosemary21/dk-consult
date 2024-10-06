import React, { ButtonHTMLAttributes, forwardRef } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "black" | "default";
  size?: "medium" | "large" | "small";
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
  buttonTitle?: string;
  isSpecial?: boolean;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type,
      variant,
      size,
      loading,
      disabled,
      className,
      children,
      buttonTitle,
      isSpecial,
      ...props
    },
    ref
  ) => {
    let buttonStyleClassName = "bg-slate-200";
    let buttonSizeClassName = "text-base";

    switch (variant) {
      case "black":
        buttonStyleClassName = "bg-black text-white";
        break;
      case "primary":
        buttonStyleClassName = "bg-primary text-white";
        break;
      case "secondary":
        buttonStyleClassName = "bg-transparent border-[1.5px] border-primary";
        break;
      default:
        break;
    }

    switch (size) {
      case "large":
        buttonSizeClassName = "text-lg";
        break;
      case "small":
        buttonSizeClassName = "text-sm";
        break;
      default:
        break;
    }

    return (
      <button
        ref={ref}
        aria-label={buttonTitle ?? "Dk Consult"}
        disabled={loading ?? disabled}
        type={type}
        className={`
        ${buttonStyleClassName}
        ${buttonSizeClassName}
        rounded-xl py-4 px-6
        ${isSpecial ? " shine-button" : ""}
        ${className}
        disabled:bg-[#C0C0C0]
        transition duration-300 ease-in-out
         hover:shadow-lg
        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50
        relative overflow-hidden
      `}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        {isSpecial && <span className="shine-effect" />}
        <style jsx>{`
          .shine-button {
            position: relative;
            overflow: hidden;
          }
          .shine-effect {
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              120deg,
              transparent,
              var(--white),
              transparent
            );
            transition: all 1s ease;
            opacity: 15%;
          }
          .shine-button:hover .shine-effect {
            left: 100%;
          }
        `}</style>
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;

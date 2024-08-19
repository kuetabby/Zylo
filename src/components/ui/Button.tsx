import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: "primary" | "ghost";
  size?: "small" | "medium" | "large";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  size = "medium",
  className = "",
  ...rest
}) => {
  const baseStyle =
    "rounded font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2";

  const sizeStyles = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-[#1F8BF0] to-[#6DEEDC] text-white hover:from-[#6DEEDC] to-[#1F8BF0] focus:ring-yellow-400",
    ghost:
      "bg-transparent border border-[#1F8BF0] bg-clip-border text-transparent hover:text-white focus:ring-yellow-400 " +
      "bg-gradient-to-r from-[#1F8BF0] to-[#6DEEDC] hover:from-[#6DEEDC] to-[#1F8BF0] " +
      "hover:bg-gradient-to-r bg-clip-text hover:bg-clip-padding",
  };

  const combinedClassName = `${baseStyle} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  return (
    <button className={combinedClassName} {...rest}>
      {label}
    </button>
  );
};

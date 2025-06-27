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
      "bg-gradient-to-r from-[#9800bf] to-[#d46aff] text-white hover:from-[#d46aff] to-[#9800bf] focus:ring-yellow-400 border-2 border-transparent",
    ghost:
      "bg-transparent border-2 border-[#9800bf] bg-clip-border text-white focus:ring-yellow-400 " +
      "bg-gradient-to-r from-[#9800bf] to-[#d46aff] hover:from-[#d46aff] to-[#9800bf] " +
      "hover:bg-gradient-to-r bg-clip-text hover:bg-clip-padding",
  };

  const combinedClassName = `${baseStyle} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  return (
    <button className={combinedClassName} {...rest}>
      {label}
    </button>
  );
};

import { ReactElement } from "react";

interface ButtonProps {
  text: string;
  variant: "primary" | "secondary";
  startIcon: ReactElement;
  onClick?: () => void;
  fullWidth?: boolean;
  loading?: boolean;
}
const variantClasses = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-200 text-purple-600",
};
const defaultStyles =
  "px-4 py-2 rounded-md font-light items-centre flex justify-center";
export function Button({
  text,
  variant,
  startIcon,
  onClick,
  fullWidth,
  loading,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={
        variantClasses[variant] +
        " " +
        defaultStyles +
        `${fullWidth ? " w-full flex justify-center items-center" : ""} ${
          loading ? "opacity-45	" : ""
        }`
      }
    >
      <div className="pr-2 ">{startIcon}</div>
      {text}
    </button>
  );
}

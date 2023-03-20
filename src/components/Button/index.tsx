import React, { FC, ReactElement } from "react";
import Spinner from "../Spinner";

interface IButton
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactElement;
  is_loading?: boolean;
  containerClassName?: string;
}

const Button: FC<IButton> = ({
  children,
  is_loading,
  containerClassName,
  ...rest
}) => {
  return (
    <button
      type="submit"
      className={`w-full bg-primary-500 ${
        is_loading ? "opacity-60" : "opacity-100"
      } flex justify-center items-center py-3 mt-5 rounded-md text-white font-bold hover:opacity-80 ${containerClassName}`}
      disabled={is_loading}
      {...rest}
    >
      {is_loading ? <Spinner /> : null}
      {children}
    </button>
  );
};

export default Button;

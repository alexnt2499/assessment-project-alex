import React, { FC } from "react";
import { FieldErrors } from "react-hook-form";

interface RHInputPropsType
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  register?: any;
  name: string;
  labelText?: string;
  containerClassName?: string;
  errors?: FieldErrors<any>;
}

const RHInput: FC<RHInputPropsType> = ({
  register,
  name,
  labelText,
  containerClassName,
  errors,
  ...rest
}) => {
  return (
    <div className={`w-full ${containerClassName}`}>
      {labelText ? (
        <div>
          <label>{labelText}</label>
        </div>
      ) : null}
      <div className="mt-3">
        <input
          {...register(name)}
          className="w-full p-3 bg-dark-800 border-[2px] border-secondary-700 focus:outline-none focus:border-primary-500 rounded-md"
          {...rest}
        />
      </div>
      {errors ? (
        <p className="text-xs mt-1 text-red-500">
          {errors?.message?.toString()}
        </p>
      ) : null}
    </div>
  );
};

export default RHInput;

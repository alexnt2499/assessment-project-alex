import React, { FC } from "react";
import { FieldErrors } from "react-hook-form";

export type RHOption = {
  value: string;
  label: string;
};

interface RHSelectPropsType
  extends React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  register?: any;
  name: string;
  labelText?: string;
  containerClassName?: string;
  errors?: FieldErrors<any>;
  options: Array<RHOption>;
}

const RHSelect: FC<RHSelectPropsType> = ({
  register,
  name,
  labelText,
  containerClassName,
  errors,
  options,
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
        <select
          {...register(name)}
          className="w-full p-3 bg-dark-800 border-[2px] border-secondary-700 focus:outline-none focus:border-primary-500 rounded-md"
          {...rest}
        >
          {options.map((value, index) => (
            <option key={index.toString()} value={value.value}>
              {value.label}
            </option>
          ))}
        </select>
      </div>
      {errors ? (
        <p className="text-xs mt-1 text-red-500">
          {errors?.message?.toString()}
        </p>
      ) : null}
    </div>
  );
};

export default RHSelect;

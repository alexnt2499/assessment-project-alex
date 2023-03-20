import useYupValidationResolver from "../../hooks/useYupValidationResolver";
import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface AQFormTypes {
  defaultValues: any;
  children: any;
  onSubmit: SubmitHandler<any>;
  validationSchemaParams?: any;
  className?: string;
}

const AQForm: FC<AQFormTypes> = ({
  defaultValues,
  children,
  onSubmit,
  validationSchemaParams,
  className,
}) => {
  const resolver = useYupValidationResolver(validationSchemaParams);

  const methods = useForm({ defaultValues, resolver });
  const {
    handleSubmit,
    formState: { errors },
    setValue,
  } = methods;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={className}>
        {React.Children.map(children, (child) => {
          return child.props.name
            ? React.createElement(child.type, {
                ...{
                  ...child.props,
                  register: methods.register,
                  key: child.props.name,
                  errors: errors[child.props.name],
                  setValue,
                  errorsFull: errors,
                },
              })
            : child;
        })}
      </div>
    </form>
  );
};

export default AQForm;

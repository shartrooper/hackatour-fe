import clsx from "clsx";
import { UseFormRegisterReturn } from "react-hook-form";
import { FieldWrapper, FieldWrapperThroughProps } from "./Wrapper";

type InputFieldProps = FieldWrapperThroughProps & {
  type?: "text" | "email" | "password";
  className?: string;
  formProps: Partial<UseFormRegisterReturn>;
};

export const InputField = (props: InputFieldProps) => {
  const { type = "text", label, className, formProps, error } = props;
  return (
    <FieldWrapper label={label} error={error}>
      <input
        type={type}
        className={clsx(
          "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",
          className
        )}
        {...formProps}
      />
    </FieldWrapper>
  );
};

import { forwardRef } from "react";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, IInput>(
  ({ ...rest }, ref) => {
    return (
      <input className="flex rounded-md p-2 w-full" ref={ref} {...rest}></input>
    );
  }
);

Input.displayName = "Input";

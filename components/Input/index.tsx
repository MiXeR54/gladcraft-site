import { forwardRef } from "react";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, IInput>(
  ({ ...rest }, ref) => {
    return (
      <input
        className="flex rounded-md bg-zinc-700 p-2 w-full"
        ref={ref}
        {...rest}
      ></input>
    );
  }
);

Input.displayName = "Input";

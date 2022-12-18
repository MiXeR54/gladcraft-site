interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ ...rest }: IInput) => {
  return <input className="flex rounded-md p-2 w-full" {...rest}></input>;
};

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className: string;
}

export const Button = ({ disabled, className, children, ...rest }: IButton) => {
  return (
    <button
      className={`${
        disabled ? "bg-zinc-500" : "bg-green-700"
      } text-zinc-200 font-bold rounded-md p-2 w-full truncate ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className: string;
}

export const Button = ({ className, children, ...rest }: IButton) => {
  return (
    <button
      className={`bg-green-700 rounded-md p-2 w-full ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

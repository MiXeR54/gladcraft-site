import {
  FieldPath,
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";

export function Input<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(props: UseControllerProps<TFieldValues, TName>) {
  const {
    field,
    fieldState: { error },
  } = useController(props);
  return (
    <>
      <input
        {...field}
        type={props.name === "password" ? "password" : "text"}
        placeholder={props.name}
        className="flex rounded-md bg-zinc-700 p-2 w-full"
      />
      {error && <p className="flex text-red-300">{error.message}</p>}
    </>
  );
}

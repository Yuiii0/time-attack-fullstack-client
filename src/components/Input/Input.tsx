import { ComponentProps, useId } from "react";

interface InputProps extends ComponentProps<"input"> {
  label: string;
  large?: boolean;
}

function Input({ label, large, ...props }: InputProps) {
  const id = useId();

  return (
    <div className="flex gap-x-4 items-center w-full">
      <label htmlFor={id} className="text-sm text-gray-700 w-28 font-medium   ">
        {label}
      </label>
      <input
        id={id}
        data-large={large}
        className="rounded border data-[large=true]:py-14 px-3 py-2 w-full focus:border-orange-400 outline-none transition border-slate-200"
        {...props}
      />
    </div>
  );
}

export default Input;

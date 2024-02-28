import { ComponentProps, useId } from "react";

interface TextAreaProps extends ComponentProps<"textarea"> {
  label: string;
}

function TextArea({ label, ...props }: TextAreaProps) {
  const id = useId();

  return (
    <div className="flex gap-x-4 items-center w-full">
      <label htmlFor={id} className="text-sm text-gray-700 w-28 font-medium">
        {label}
      </label>
      <textarea className="rounded border px-3 py-2 w-full focus:border-orange-400 outline-none transition border-slate-200">
        TextArea
      </textarea>
    </div>
  );
}

export default TextArea;

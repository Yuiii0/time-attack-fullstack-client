import { ComponentProps, PropsWithChildren } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  color?: "white" | "orange";
}

function Button({
  color = "orange",
  children,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className="border w-full py-2 px-12 rounded  text=[15px] transition hover:border-orange-400 hover:drop-shadow data-[color=orange]:bg-orange-400 data-[color=orange]:text-white hover:data-[color=orange]:bg-white hover:data-[color=orange]:text-orange-400"
      data-color={color}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;

import React from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

const buttonStyle = tv({
  base: "flex h-12 items-center justify-center gap-2 rounded-lg border-2 border-black px-4 text-center font-semibold text-black active:shadow-none",
  variants: {
    variant: {
      primary: "bg-primary hover:bg-red-500 active:bg-red-600",
      secondary: "bg-secondary hover:bg-yellow-500 active:bg-yellow-600",
      accent: "bg-accent hover:bg-cyan-500 active:bg-cyan-600",
    },
    size: {
      sm: "text-sm",
      md: "text",
      lg: "text-lg",
    },
    width: {
      full: "w-full",
      auto: "w-auto",
      wide: "w-60",
      square: "w-12",
    },
    shadow: {
      none: "shadow-none",
      normal: "hover:opacity-2 translate-x-0 translate-y-0 shadow-bru-right active:translate-x-1 active:translate-y-1",
      sm: "shadow-bru-right-sm translate-x-0 translate-y-0 hover:opacity-2 active:translate-x-{{ 0.5 }} active:translate-y-{{ 0.5 }} ",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    widht: "auto",
    shadow: "normal",
  },
});

type TButton = VariantProps<typeof buttonStyle>;
interface ButtonProps extends TButton, React.ComponentPropsWithRef<"button"> {}

export const Button = (props: ButtonProps) => {
  return (
    <button {...props} className={twMerge(buttonStyle({ ...props }), props.className)}>
      {props.children}
    </button>
  );
};

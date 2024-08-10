"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

const inputStyle = tv({
  base: "h-12 rounded-lg border-2 border-bru-black bg-bru-white px-4 font-semibold text-bru-black focus:ring focus:ring-accent",
  variants: {
    shadow: {
      none: "shadow-none",
      normal: "translate-x-0 translate-y-0 shadow-bru-right focus:translate-x-1 focus:translate-y-1",
      sm: "shadow-bru-right-sm translate-x-0 translate-y-0 focus:translate-x-{{ 0.5 }} focus:translate-y-{{ 0.5 }}",
    },
  },
  defaultVariants: {
    shadow: "sm",
  },
});

type TInput = VariantProps<typeof inputStyle>;
interface InputProps extends TInput, React.ComponentPropsWithRef<"input"> {}

export const Input = (props: InputProps) => {
  return <input {...props} className={twMerge(inputStyle({ ...props }), props.className)} />;
};

"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

const textAreaStyle = tv({
  base: "resize-none rounded-lg border-2 border-bru-black bg-bru-white p-4 font-semibold text-bru-black focus:ring focus:ring-accent",
  variants: {
    shadow: {
      none: "shadow-none",
      normal: "translate-x-0 translate-y-0 shadow-bru-right focus:translate-x-1 focus:translate-y-1",
      sm: "translate-x-0 translate-y-0 shadow-bru-right-sm focus:translate-x-0.5 focus:translate-y-0.5",
    },
    height: {
      small: "h-24",
      medium: "h-36",
      large: "h-48",
    },
  },
  defaultVariants: {
    shadow: "sm",
    height: "medium",
  },
});

type TTextarea = VariantProps<typeof textAreaStyle>;
interface Props extends TTextarea, React.ComponentPropsWithRef<"textarea"> {}

export const Textarea = (props: Props) => {
  return (
    <textarea {...props} className={twMerge(textAreaStyle({ ...props }), props.className)}>
      {props.children}
    </textarea>
  );
};

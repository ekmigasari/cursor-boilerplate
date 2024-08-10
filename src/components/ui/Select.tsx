"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

const selectStyle = tv({
  base: "h-12 w-full appearance-none rounded-lg border-2 border-bru-black bg-bru-white px-4 font-semibold text-bru-black focus:ring focus:ring-accent",
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

type TSelect = VariantProps<typeof selectStyle>;
interface SelectProps extends TSelect, React.ComponentPropsWithRef<"select"> {}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(({ children, ...props }, ref) => {
  return (
    <div className="relative">
      <select {...props} ref={ref} className={twMerge(selectStyle({ ...props }), props.className)}>
        {children}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-bru-black">
        <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </div>
    </div>
  );
});

Select.displayName = "Select";

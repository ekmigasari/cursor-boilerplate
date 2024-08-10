"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

const cardStyle = tv({
  base: "text-bru-black border-bru-black bg-bru-white focus:ring-accent h-12 rounded-lg border-2 px-4 font-semibold focus:ring",
  variants: {
    shadow: {
      none: "shadow-none",
      normal: "shadow-bru-right translate-x-0 translate-y-0 focus:translate-x-1 focus:translate-y-1",
      sm: "shadow-bru-right-sm translate-x-0 translate-y-0 focus:translate-x-{{ 0.5 }} focus:translate-y-{{ 0.5 }}",
    },
  },
  defaultVariants: {
    shadow: "sm",
  },
});

type TCard = VariantProps<typeof cardStyle>;
interface CardProps extends TCard, React.ComponentPropsWithRef<"div"> {}

export const Card = (props: CardProps) => {
  return <div {...props} className={twMerge(cardStyle({ ...props }), props.className)} />;
};

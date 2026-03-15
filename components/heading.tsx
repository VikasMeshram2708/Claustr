import { cn } from "@/lib/utils";
import React from "react";

type HeadingProps = {
  className?: string;
  children: React.ReactNode;
};
export default function Heading({ children, className }: HeadingProps) {
  return (
    <h1
      className={cn(
        "text-2xl font-medium text-balance md:text-4xl lg:text-5xl xl:text-6xl",
        className,
      )}
    >
      {children}
    </h1>
  );
}

import { cn } from "@/lib/utils";
import React from "react";

type SubHeadingProps = {
  className?: string;
  children: React.ReactNode;
};
export default function SubHeading({ children, className }: SubHeadingProps) {
  return (
    <p
      className={cn("text-muted-foreground text-base/7 font-medium", className)}
    >
      {children}
    </p>
  );
}

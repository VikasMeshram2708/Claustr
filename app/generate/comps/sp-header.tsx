"use client";

import {
  SidebarHeader,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { SparklesIcon } from "lucide-react";
import Link from "next/link";

export default function SPHeader() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <SidebarHeader className="border-border border-b">
      <div
        className={cn(
          "flex h-14 items-center justify-between px-3",
          isCollapsed && "justify-center",
        )}
      >
        <Link href="/" className="flex items-center gap-2">
          {!isCollapsed && <SparklesIcon className="text-primary size-6" />}

          {!isCollapsed && (
            <h1 className="text-lg font-semibold tracking-tight">Claustr</h1>
          )}
        </Link>

        <SidebarTrigger className="size-8" />
      </div>
    </SidebarHeader>
  );
}

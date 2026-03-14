import { SidebarHeader, SidebarTrigger } from "@/components/ui/sidebar";
import { SparklesIcon } from "lucide-react";
import Link from "next/link";

export default function SPHeader() {
  return (
    <SidebarHeader>
      <div className="flex items-center justify-between p-3">
        <Link href="/" className="flex items-center gap-2">
          <SparklesIcon className="size-7" />
          <h1 className="text-xl font-bold md:text-2xl">Claustr</h1>
        </Link>
        <SidebarTrigger />
      </div>
    </SidebarHeader>
  );
}

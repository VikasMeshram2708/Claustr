"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { authClient } from "@/lib/auth-client";
import { ChevronsUpDownIcon } from "lucide-react";
import Image from "next/image";

export default function SPFooter() {
  const { data, isPending } = authClient.useSession();

  const user = data?.user;

  if (isPending) {
    return <Skeleton className="h-10 w-full rounded-2xl" />;
  }

  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton className="gap-2">
                <Image
                  src={user?.image ?? "/avatar.png"}
                  alt={user?.name ?? "User"}
                  width={24}
                  height={24}
                  className="rounded-full"
                />

                <span className="text-sm">{user?.name ?? "Anon"}</span>

                <ChevronsUpDownIcon className="size-4 opacity-60" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-44">
              <DropdownMenuLabel className="text-muted-foreground">
                Account
              </DropdownMenuLabel>

              <DropdownMenuItem>Account</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
}

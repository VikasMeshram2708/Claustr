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
import {
  ChevronsUpDownIcon,
  LogOutIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function SPFooter() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { data, isPending } = authClient.useSession();

  const user = data?.user;

  if (isPending) {
    return <Skeleton className="h-10 w-full rounded-2xl" />;
  }

  async function handleLogout() {
    setIsLoading(false);
    try {
      setIsLoading(true);

      const result = await authClient.signOut();
      if (result) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Internal server error");
    } finally {
      setIsLoading(false);
    }
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

                <ChevronsUpDownIcon className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              className="w-(--radix-popper-anchor-width)"
            >
              <DropdownMenuLabel className="text-muted-foreground">
                Account
              </DropdownMenuLabel>

              <DropdownMenuItem>
                <UsersIcon />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem>
                <SettingsIcon />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem
                disabled={isLoading}
                role="button"
                onClick={handleLogout}
              >
                {isLoading ? (
                  "Logging out..."
                ) : (
                  <>
                    <LogOutIcon />
                    Logout
                  </>
                )}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
}

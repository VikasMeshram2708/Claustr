"use client";

import {
  LayoutDashboardIcon,
  Settings2Icon,
  VideoIcon,
  VideotapeIcon,
  WalletCardsIcon,
} from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { TablerIcon } from "@tabler/icons-react";
import { LucideIcon } from "lucide-react";
import { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SidePanelLinkType = {
  label: string;
  icon: LucideIcon | TablerIcon;
  href: Route;
};

const data: Array<SidePanelLinkType> = [
  {
    href: "/generate",
    label: "Dashboard",
    icon: LayoutDashboardIcon,
  },
  {
    href: "/generate/create-ad",
    label: "Create Ad",
    icon: VideoIcon,
  },
  {
    href: "#",
    label: "My Videos",
    icon: VideotapeIcon,
  },
  {
    href: "#",
    label: "Billing",
    icon: WalletCardsIcon,
  },
  {
    href: "#",
    label: "Settings",
    icon: Settings2Icon,
  },
];
export default function SPNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "#") return false;
    return pathname === href;
  };

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Navigation</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {data?.map((d) => (
            <SidebarMenuItem key={d.label}>
              <SidebarMenuButton asChild isActive={isActive(d.href)}>
                <Link href={d.href} prefetch>
                  <d.icon />
                  {d.label}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { TablerIcon } from "@tabler/icons-react";
import {
  LayoutDashboardIcon,
  LucideIcon,
  Settings2Icon,
  VideoIcon,
  VideotapeIcon,
  WalletCardsIcon,
} from "lucide-react";
import { Route } from "next";
import SPHeader from "./sp-header";
import Link from "next/link";
import SPFooter from "./sp-footer";
import SPStats from "./sp-stats";

type SidePanelLinkType = {
  label: string;
  icon: LucideIcon | TablerIcon;
  href: Route;
};

const data: Array<SidePanelLinkType> = [
  {
    href: "#",
    label: "Dashboard",
    icon: LayoutDashboardIcon,
  },
  {
    href: "#",
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
export default function SidePanel() {
  return (
    <Sidebar collapsible="icon">
      {/* Header */}
      <SPHeader />
      {/* Content */}
      <SidebarContent>
        {/* stats */}
        {/* Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data?.map((d) => (
                <SidebarMenuItem key={d.label}>
                  <SidebarMenuButton asChild>
                    <Link href={d.href}>
                      <d.icon />
                      {d.label}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      {/* Footer */}
      <SPFooter />
    </Sidebar>
  );
}

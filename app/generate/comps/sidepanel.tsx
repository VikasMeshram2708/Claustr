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
import { IconAsset, TablerIcon } from "@tabler/icons-react";
import {
  FolderOpenIcon,
  HomeIcon,
  LucideIcon,
  ToolboxIcon,
} from "lucide-react";
import { Route } from "next";
import SPHeader from "./sp-header";
import Link from "next/link";
import SPFooter from "./sp-footer";

type SidePanelLinkType = {
  label: string;
  icon: LucideIcon | TablerIcon;
  href: Route;
};

const data: Array<SidePanelLinkType> = [
  {
    href: "#",
    label: "Home",
    icon: HomeIcon,
  },
  {
    href: "#",
    label: "Projects",
    icon: FolderOpenIcon,
  },
  {
    href: "#",
    label: "Brand Kits",
    icon: ToolboxIcon,
  },
  {
    href: "#",
    label: "Assets",
    icon: IconAsset,
  },
];
export default function SidePanel() {
  return (
    <Sidebar collapsible="icon">
      {/* Header */}
      <SPHeader />
      {/* Content */}
      <SidebarContent>
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

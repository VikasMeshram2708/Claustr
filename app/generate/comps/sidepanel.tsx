import { Sidebar, SidebarContent } from "@/components/ui/sidebar";

import SPHeader from "./sp-header";
import SPFooter from "./sp-footer";
import SPNav from "./sp-nav";

export default function SidePanel() {
  return (
    <Sidebar collapsible="icon">
      {/* Header */}
      <SPHeader />
      {/* Content */}
      <SidebarContent>
        {/* Navigation */}
        <SPNav />
      </SidebarContent>
      {/* Footer */}
      <SPFooter />
    </Sidebar>
  );
}

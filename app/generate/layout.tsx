import { SidebarProvider } from "@/components/ui/sidebar";
import SidePanel from "./comps/sidepanel";
export default function GenerateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider className="flex">
      <SidePanel />
      <main className="flex-1 p-3">{children}</main>
    </SidebarProvider>
  );
}

import QuickTemplates from "./comps/quick-templates";
import RecentGen from "./comps/recent-gen";
import SPStats from "./comps/sp-stats";

export default function GeneratePage() {
  return (
    <div className="space-y-6 p-5">
      {/* Stats */}
      <SPStats />

      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-2">
        <RecentGen />
        <QuickTemplates />
      </div>
    </div>
  );
}

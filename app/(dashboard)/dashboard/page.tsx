import { SearchOverviewCard } from "@/components/search/search-overview-card";

import { DashboardKpis } from "./components/dashboard-kpis";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <DashboardKpis />
      <SearchOverviewCard />
    </div>
  );
}

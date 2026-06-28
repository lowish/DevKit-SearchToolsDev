import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

import { ToolsExplorer } from "./components/tools-explorer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a0a]">
      <div className="relative z-10">
        <SiteHeader transparent />

        <div className="px-6">
          <ToolsExplorer />
        </div>

        <SiteFooter />
      </div>
    </main>
  );
}

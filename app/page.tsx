import Aurora from "@/components/background/Aurora";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

import { ToolsExplorer } from "./components/tools-explorer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a0a]">
      <div className="pointer-events-none absolute inset-0">
        <Aurora
          colorStops={["#66ff66", "#8b5cf6", "#2a0b63"]}
          amplitude={1}
          blend={0.5}
          speed={0.35}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2),rgba(0,0,0,0.88)_72%)]" />

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

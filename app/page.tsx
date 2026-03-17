import { ToolsShowcase } from "@/components/ToolsShowcase";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

import { HeroSearch } from "./components/hero-search";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <SiteHeader />

      <div className="px-6">
        <section className="mx-auto flex min-h-[calc(70svh-4.5rem)] w-full max-w-5xl flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Discover tools built for modern developers
          </h1>
          <p className="mt-6 max-w-xl text-center text-base text-zinc-400 md:text-lg">
            Explore a curated list of developer tools that help you build, deploy, and ship projects faster, from AI assistants
            to hosting platforms and component libraries.
          </p>
          <div className="mt-10 w-full max-w-xl">
            <HeroSearch />
          </div>
        </section>

        <ToolsShowcase />
      </div>

      <SiteFooter />
    </main>
  );
}

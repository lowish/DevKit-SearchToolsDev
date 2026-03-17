import Aurora from "@/components/background/Aurora";
import { ToolsShowcase } from "@/components/sections/ToolsShowcase";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

import { HeroSearch } from "./components/hero-search";

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
          <section className="mx-auto flex min-h-[calc(75svh-4.5rem)] w-full max-w-5xl flex-col items-center justify-center pt-24 text-center">
            <h1 className="mt-7 text-4xl font-bold tracking-tight text-white md:text-6xl">
              Discover tools built for modern developers
            </h1>
            <p className="mt-6 max-w-xl text-center text-base text-zinc-400 md:text-lg">
              Explore a curated list of developer tools that help you build, deploy, and ship
              projects faster, from AI assistants to hosting platforms and component libraries.
            </p>
            <div className="mt-10 w-full max-w-xl">
              <HeroSearch />
            </div>
          </section>

          <ToolsShowcase />
        </div>

        <SiteFooter />
      </div>
    </main>
  );
}

import { Geist } from "next/font/google";

import { ToolsShowcase } from "@/components/ToolsShowcase";

import { HeroSearch } from "./components/hero-search";

const geistSans = Geist({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={`${geistSans.className} min-h-screen bg-[#0a0a0a] px-6`}>
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          Discover tools to ship faster than ever
        </h1>
        <p className="mt-6 max-w-xl text-center text-base text-zinc-400 md:text-lg">
          A curated collection of essential resources for modern developers, from AI assistants to
          hosting platforms and component libraries.
        </p>
        <div className="mt-10 w-full max-w-xl">
          <HeroSearch />
        </div>
      </section>

      <ToolsShowcase />
    </main>
  );
}

"use client";

import { useState } from "react";

import { ToolsShowcase } from "@/components/sections/ToolsShowcase";

import { HeroSearch } from "./hero-search";

export function ToolsExplorer() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <section className="mx-auto flex min-h-[calc(75svh-4.5rem)] w-full max-w-5xl flex-col items-center justify-center pt-24 text-center">
        <h1 className="mt-7 text-4xl font-bold tracking-tight text-white md:text-6xl">
          Discover tools built for modern developers
        </h1>
        <p className="mt-6 max-w-xl text-center text-base text-zinc-400 md:text-lg">
          Explore a curated list of developer tools that help you build, deploy, and ship projects
          faster, from AI assistants to hosting platforms and component libraries.
        </p>

        <div className="mt-10 w-full max-w-xl">
          <HeroSearch query={searchQuery} onQueryChange={setSearchQuery} />
        </div>
      </section>

      <ToolsShowcase searchQuery={searchQuery} />
    </>
  );
}

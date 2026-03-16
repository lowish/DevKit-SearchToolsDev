"use client";

import { Search } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

const categories = ["Vibe Coding", "Hosting", "AI Tools", "Components"] as const;

export function HeroSearch() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>(categories[0]);

  const onSearch = (_query: string, _category: string) => {
    // Placeholder for future search integration.
  };

  const handleQueryChange = (nextQuery: string) => {
    setQuery(nextQuery);
    onSearch(nextQuery, activeCategory);
  };

  const handleCategoryClick = (category: (typeof categories)[number]) => {
    setActiveCategory(category);
    onSearch(query, category);
  };

  return (
    <div className="w-full">
      <div className="flex w-full items-center gap-3 rounded-full border border-zinc-700 bg-zinc-900 px-5 py-3 text-zinc-300 focus-within:ring-1 focus-within:ring-zinc-500">
        <Search className="h-5 w-5 shrink-0 text-zinc-500" aria-hidden="true" />
        <input
          type="text"
          value={query}
          onChange={(event) => handleQueryChange(event.target.value)}
          placeholder="Search for a tool or category..."
          aria-label="Search developer tools"
          className="w-full bg-transparent text-zinc-300 placeholder:text-zinc-500 focus:outline-none"
        />
      </div>

      <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
        {categories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => handleCategoryClick(category)}
              className={cn(
                "cursor-pointer rounded-full bg-zinc-800 px-4 py-1.5 text-sm text-zinc-300 transition-all hover:bg-zinc-700",
                isActive && "bg-white font-medium text-black",
              )}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}

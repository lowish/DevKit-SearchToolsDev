import { Github } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  transparent?: boolean;
};

export function SiteHeader({ transparent = false }: SiteHeaderProps) {
  return (
    <header
      className={cn(
        "top-0 z-40 w-full",
        transparent
          ? "absolute"
          : "sticky border-b border-zinc-800/80 bg-[#0a0a0a]/90 backdrop-blur",
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-4">
        <div
          className={cn(
            "flex items-center justify-between",
            transparent &&
              "mx-auto max-w-3xl rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 backdrop-blur-xl",
          )}
        >
          <Link href="/" className="text-xl font-semibold tracking-tight text-white">
            DevKit
          </Link>

          <div className="flex items-center gap-5">
            <Link href="/about" className="text-sm text-zinc-200 transition-colors hover:text-white">
              About
            </Link>
            <Link
              href="https://github.com/lowish"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Open GitHub"
              className="text-zinc-200 transition-colors hover:text-white"
            >
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

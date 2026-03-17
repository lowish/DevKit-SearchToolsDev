import { Github } from "lucide-react";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800/80 bg-[#0a0a0a]/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-semibold tracking-tight text-white">
          DevKit
        </Link>

        <div className="flex items-center gap-5">
          <Link href="/about" className="text-sm text-zinc-300 transition-colors hover:text-white">
            About
          </Link>
          <Link
            href="https://github.com/lowish"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Open GitHub"
            className="text-zinc-300 transition-colors hover:text-white"
          >
            <Github className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </header>
  );
}

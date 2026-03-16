import Link from "next/link";

import { Button } from "@/components/ui/button";

export function HomeHero() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white via-slate-50 to-cyan-50 p-8 shadow-sm">
      <p className="text-xs uppercase tracking-wide text-slate-500">Starter Architecture</p>
      <h1 className="mt-2 max-w-2xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        App Router dashboard scaffold with reusable Algolia search wiring.
      </h1>
      <p className="mt-3 max-w-2xl text-base text-slate-600">
        Shared components live in <span className="font-mono">components/</span>, while
        route-specific UI stays under <span className="font-mono">app/components/</span>
        and nested route folders.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/dashboard">
          <Button>Open Dashboard</Button>
        </Link>
        <Link href="https://nextjs.org/docs/app" target="_blank" rel="noreferrer">
          <Button variant="secondary">App Router docs</Button>
        </Link>
      </div>
    </section>
  );
}

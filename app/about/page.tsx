import { SiteHeader } from "@/components/layout/site-header";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">About DevKit</h1>
        <p className="mt-6 text-base text-zinc-400 md:text-lg">
          DevKit helps developers quickly discover high-quality tools for coding, hosting,
          AI workflows, and UI components in one curated place.
        </p>
      </section>
    </main>
  );
}

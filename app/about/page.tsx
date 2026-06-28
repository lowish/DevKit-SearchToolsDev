import ShaderBackground from "@/components/background/ShaderBackground";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a0a]">
      {/* Animated silky grayscale wave background */}
      <div className="pointer-events-none absolute inset-0">
        <ShaderBackground color1="#050505" color2="#f5f5f5" intensity={1} speed={1} />
      </div>

      <div className="relative z-10">
        <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          {/* Stable backdrop panel: blurs the moving wave so the text is always readable */}
          <div className="max-w-2xl rounded-2xl bg-white/85 px-8 py-7 shadow-lg ring-1 ring-black/5 backdrop-blur-md">
            <h2 className="text-base font-normal text-black md:text-lg">
              DevKit helps developers quickly discover high-quality tools for coding, hosting,
              AI workflows, and UI components in one curated place.
            </h2>
          </div>
        </section>
      </div>
    </main>
  );
}

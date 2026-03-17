import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface Tool {
  name: string;
  description: string;
  tags: string[];
}

interface Category {
  name: string;
  slug: string;
  tools: Tool[];
}

const categories: Category[] = [
  {
    name: "Vibe Coding",
    slug: "vibe-coding",
    tools: [
      {
        name: "Cursor",
        description: "An AI-native code editor built for fast pair-programming workflows.",
        tags: ["Editor", "AI", "Code"],
      },
      {
        name: "Claude Code",
        description: "Work with Claude directly in your codebase to build and debug faster.",
        tags: ["AI", "Code"],
      },
      {
        name: "Codex",
        description: "AI coding agent from OpenAI for understanding, editing, and shipping code faster.",
        tags: ["Editor", "AI"],
      },
       {
        name: "v0",
        description: "Generate UI components and full app structures from plain language prompts.",
        tags: ["AI", "Code"],
      },
      {
        name: "Manus",
        description: "AI software engineer built to plan, write, and iterate on production-ready code.",
        tags: ["AI", "Agent"],
      },
      {
        name: "GitHub Copilot",
        description: "Ship features quicker with context-aware code suggestions and chat support.",
        tags: ["AI", "Assistant"],
      },
    ],
  },
  {
    name: "Hosting",
    slug: "hosting",
    tools: [
      {
        name: "Vercel",
        description: "Deploy frontend apps globally with preview environments and edge support.",
        tags: ["Hosting", "Frontend"],
      },
      {
        name: "Netlify",
        description: "Run modern web projects with CI-driven deploys and edge functions.",
        tags: ["Hosting", "CI/CD"],
      },
      {
        name: "Railway",
        description: "Provision databases and app services with a developer-first deployment flow.",
        tags: ["Infra", "Backend"],
      },
      {
        name: "Fly.io",
        description: "Run full-stack apps close to users with lightweight machine deployments.",
        tags: ["Edge", "Hosting"],
      },
      {
        name: "Render",
        description: "Host APIs, static sites, and background workers from one managed platform.",
        tags: ["Cloud", "Backend"],
      },
      {
        name: "Supabase",
        description: "Build apps faster with a hosted Postgres database, auth, storage, and realtime APIs.",
        tags: ["Backend", "Database"],
      },
    ],
  },
  {
    name: "AI Tools",
    slug: "ai-tools",
    tools: [
      {
        name: "ChatGPT",
        description: "General-purpose AI assistant for coding, writing, and planning workflows.",
        tags: ["Assistant", "LLM"],
      },
      {
        name: "Claude",
        description: "Reliable reasoning model for long-context coding and product decisions.",
        tags: ["Assistant", "Reasoning"],
      },
      {
        name: "Perplexity",
        description: "Answer engine that combines conversational AI with cited web results.",
        tags: ["Research", "Search"],
      },
      {
        name: "Gemini",
        description: "Multimodal AI models for coding, analysis, and interactive workflows.",
        tags: ["Multimodal", "AI"],
      },
      {
        name: "Grok",
        description: "Ultra-fast inference platform optimized for responsive AI applications.",
        tags: ["Inference", "Performance"],
      },
      {
        name: "Lovable",
        description: "Build and ship full-stack products quickly with AI-guided app generation.",
        tags: ["Builder", "AI"],
      },
    ],
  },
  {
    name: "Components",
    slug: "components",
    tools: [
      {
        name: "Shadcn/ui",
        description: "Composable React components built for customization with Tailwind CSS.",
        tags: ["React", "UI"],
      },
      {
        name: "Radix UI",
        description: "Accessible headless primitives for building polished design systems.",
        tags: ["Accessibility", "Primitives"],
      },
      {
        name: "Magic UI",
        description: "Animated and interactive UI patterns designed for modern product landing pages.",
        tags: ["Animation", "UI"],
      },
      {
        name: "Aceternity UI",
        description: "Visually rich components focused on storytelling and engaging interactions.",
        tags: ["Components", "Effects"],
      },
      {
        name: "Framer",
        description: "Design and prototype highly interactive interfaces with smooth motion workflows.",
        tags: ["Animation", "Motion"],
      },
      {
        name: "Material UI",
        description: "Production-ready React components implementing Google's Material Design system.",
        tags: ["React", "Design System"],
      },
    ],
  }
];

const toolLinks: Record<string, string> = {
  Cursor: "https://cursor.com",
  v0: "https://v0.dev",
  "Claude Code": "https://www.anthropic.com/claude-code",
  Manus: "https://manus.im",
  Codex: "https://openai.com/codex",
  "GitHub Copilot": "https://github.com/features/copilot",
  Vercel: "https://vercel.com",
  Netlify: "https://www.netlify.com",
  Railway: "https://railway.app",
  "Fly.io": "https://fly.io",
  Render: "https://render.com",
  "Supabase": "https://supabase.com",
  "Shadcn/ui": "https://ui.shadcn.com",
  "Radix UI": "https://www.radix-ui.com",
  "Magic UI": "https://magicui.design",
  "Aceternity UI": "https://ui.aceternity.com",
  "Framer": "https://www.framer.com",
  "Material UI": "https://mui.com",
  ChatGPT: "https://chatgpt.com",
  Claude: "https://claude.ai",
  Perplexity: "https://www.perplexity.ai",
  Gemini: "https://gemini.google.com",
  Grok: "https://grok.com",
  Lovable: "https://lovable.dev",
};

function getToolInitial(name: string) {
  const match = name.match(/[A-Za-z0-9]/);
  return match ? match[0]!.toUpperCase() : "?";
}

function getToolHref(name: string) {
  return toolLinks[name] ?? "#";
}

const toolLogos: Record<string, string> = {
  "Cursor": "/cursor.png",
  "v0": "/vO.webp",
  "Claude Code": "/claude.png",
  "Manus": "/manuss.png",
  "Codex": "/codex.png",
  "GitHub Copilot": "/copilot.jpg",
  "Vercel": "/vercel.png",
  "Netlify": "/netlify.png",
  "Railway": "/railway.png",
  "Fly.io": "/flyio.jpg",
  "Render": "/render.jpg",
  "Supabase": "/supabase.jpg",
  "Shadcn/ui": "/shadcn.png",
  "Radix UI": "/radix.png",
  "Magic UI": "/magic.png",
  "Aceternity UI": "/aceternity.jpg",
  "Framer": "/framer.jpg",
  "Material UI": "/material.jpg",
  "ChatGPT": "/chatpgt.png",
  "Claude": "/claude.png",
  "Perplexity": "/perplexity.png",
  "Gemini": "/gemini.png",
  "Grok": "/grok.png",
  "Lovable": "/lovable.jpg",
};

function getToolLogo(name: string) {
  return toolLogos[name] ?? null;
}

export function ToolsShowcase() {
  return (
    <section className="mx-auto w-full max-w-6xl pb-12 pt-2">
      {categories.map((category) => (
        <div key={category.slug} id={category.slug} className="mb-16 space-y-5">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 md:text-3xl">
              {category.name}
            </h2>
            <Link
              href={`#${category.slug}`}
              className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 text-sm font-medium text-zinc-400 transition-all hover:border-zinc-700 hover:text-zinc-100"
            >
              View all
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {category.tools.map((tool) => {
              const logo = getToolLogo(tool.name);

              return (
                <Link
                  key={tool.name}
                  href={getToolHref(tool.name)}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex h-full flex-col rounded-xl border border-zinc-800/90 bg-zinc-900/70 p-5 transition-all duration-200 hover:border-zinc-700"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-zinc-700 bg-zinc-800/90 text-sm font-semibold text-zinc-200">
                      {logo ? (
                        <Image
                          src={logo}
                          alt={`${tool.name} logo`}
                          width={40}
                          height={40}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        getToolInitial(tool.name)
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-semibold tracking-tight text-zinc-100 transition-colors group-hover:text-white">
                        {tool.name}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-zinc-400">
                        {tool.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2 border-t border-zinc-800/80 pt-4">
                    {tool.tags.map((tag) => (
                      <span
                        key={`${tool.name}-${tag}`}
                        className="rounded-full border border-zinc-700/80 bg-zinc-800/80 px-2.5 py-0.5 text-xs font-medium text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}

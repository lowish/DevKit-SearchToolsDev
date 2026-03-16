import Link from "next/link";

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
        name: "v0",
        description: "Generate UI components and full app structures from plain language prompts.",
        tags: ["AI", "Code"],
      },
      {
        name: "Claude Code",
        description: "Work with Claude directly in your codebase to build and debug faster.",
        tags: ["AI", "Code"],
      },
      {
        name: "Bolt.new",
        description: "Create and iterate on full-stack applications entirely from your browser.",
        tags: ["AI", "Full-stack"],
      },
      {
        name: "Windsurf",
        description: "Code with agentic assistance and flow-aware tooling tailored for developers.",
        tags: ["Editor", "AI"],
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
        name: "Cloudflare Pages",
        description: "Build and ship frontend experiences on Cloudflare's high-performance edge.",
        tags: ["Edge", "Frontend"],
      },
    ],
  },
  {
    name: "Components",
    slug: "components",
    tools: [
      {
        name: "shadcn/ui",
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
        name: "Headless UI",
        description: "Completely unstyled UI building blocks that pair cleanly with Tailwind.",
        tags: ["Headless", "React"],
      },
      {
        name: "Ark UI",
        description: "Framework-agnostic component primitives based on finite state machines.",
        tags: ["Primitives", "State"],
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
        name: "Groq",
        description: "Ultra-fast inference platform optimized for responsive AI applications.",
        tags: ["Inference", "Performance"],
      },
      {
        name: "Replicate",
        description: "Run and integrate open-source ML models via a simple cloud API.",
        tags: ["Models", "API"],
      },
    ],
  },
];

const toolLinks: Record<string, string> = {
  Cursor: "https://cursor.com",
  v0: "https://v0.dev",
  "Claude Code": "https://www.anthropic.com/claude-code",
  "Bolt.new": "https://bolt.new",
  Windsurf: "https://windsurf.com",
  "GitHub Copilot": "https://github.com/features/copilot",
  Vercel: "https://vercel.com",
  Netlify: "https://www.netlify.com",
  Railway: "https://railway.app",
  "Fly.io": "https://fly.io",
  Render: "https://render.com",
  "Cloudflare Pages": "https://pages.cloudflare.com",
  "shadcn/ui": "https://ui.shadcn.com",
  "Radix UI": "https://www.radix-ui.com",
  "Magic UI": "https://magicui.design",
  "Aceternity UI": "https://ui.aceternity.com",
  "Headless UI": "https://headlessui.com",
  "Ark UI": "https://ark-ui.com",
  ChatGPT: "https://chatgpt.com",
  Claude: "https://claude.ai",
  Perplexity: "https://www.perplexity.ai",
  Gemini: "https://gemini.google.com",
  Groq: "https://groq.com",
  Replicate: "https://replicate.com",
};

function getToolInitial(name: string) {
  const match = name.match(/[A-Za-z0-9]/);
  return match ? match[0]!.toUpperCase() : "?";
}

function getToolHref(name: string) {
  return toolLinks[name] ?? "#";
}

export function ToolsShowcase() {
  return (
    <section className="mx-auto w-full max-w-6xl pb-12">
      {categories.map((category) => (
        <div key={category.slug} id={category.slug} className="mb-16">
          <div className="mb-5 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold text-white">{category.name}</h2>
            <Link
              href={`#${category.slug}`}
              className="text-sm text-zinc-400 transition-colors hover:text-zinc-200"
            >
              View all ↗
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {category.tools.map((tool) => (
              <Link
                key={tool.name}
                href={getToolHref(tool.name)}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-xl border border-zinc-800 bg-zinc-900 p-5 transition-all duration-200 hover:border-zinc-600"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-800 text-base font-semibold text-zinc-200">
                    {getToolInitial(tool.name)}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-2xl font-semibold leading-tight text-white">{tool.name}</h3>
                    <p className="mt-2 line-clamp-2 text-sm text-zinc-400">{tool.description}</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {tool.tags.map((tag) => (
                    <span
                      key={`${tool.name}-${tag}`}
                      className="rounded-full bg-zinc-800 px-2.5 py-0.5 text-xs text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

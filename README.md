# Search Tools Dashboard

Next.js App Router scaffold with:

- Modular dashboard route structure in `app/`
- Shared component library in `components/`
- Route-scoped components in `app/components/`
- Reusable Algolia configuration in `lib/algolia/`
- Tailwind CSS + shadcn-style utility patterns

## Architecture Rules

- Use App Router for all pages and nested dashboard modules.
- Put reusable UI/domain pieces in `components/`.
- Keep page-specific pieces in route folders such as `app/components/` or `app/(dashboard)/dashboard/components/`.
- Keep Algolia setup and helpers under `lib/algolia/` so search logic is reusable.
- Never hardcode Algolia keys.

## Environment Variables

Copy `.env.example` to `.env.local` and set values:

```bash
NEXT_PUBLIC_ALGOLIA_APP_ID=
NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY=
NEXT_PUBLIC_ALGOLIA_INDEX_NAME=portfolio_items
ALGOLIA_ADMIN_API_KEY=
```

Notes:

- `NEXT_PUBLIC_*` values can be used in client code.
- `ALGOLIA_ADMIN_API_KEY` is server-only and must never be exposed to the browser.

## Development

```bash
npm run dev
```

Open `http://localhost:3000` for the home page and `http://localhost:3000/dashboard` for the modular dashboard route.

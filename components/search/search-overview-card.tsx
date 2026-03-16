import { getAlgoliaIndexName, isAlgoliaClientConfigured } from "@/lib/algolia/client";

export function SearchOverviewCard() {
  const isConfigured = isAlgoliaClientConfigured();
  const indexName = getAlgoliaIndexName() ?? "(missing NEXT_PUBLIC_ALGOLIA_INDEX_NAME)";

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-xs uppercase tracking-wide text-slate-500">Search Layer</p>
      <h2 className="mt-2 text-lg font-semibold text-slate-900">Algolia Readiness</h2>
      <p className="mt-1 text-sm text-slate-600">
        Shared configuration is loaded from <span className="font-mono">lib/algolia</span>.
      </p>
      <div className="mt-4 grid gap-2 text-sm">
        <p className="text-slate-700">
          Client config: {isConfigured ? "ready" : "missing env vars"}
        </p>
        <p className="text-slate-700">Index: {indexName}</p>
      </div>
    </section>
  );
}

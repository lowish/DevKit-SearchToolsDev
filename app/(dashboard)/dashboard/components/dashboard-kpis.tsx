const KPI_ITEMS = [
  { label: "Indexed Projects", value: "128" },
  { label: "Avg. Search Latency", value: "42ms" },
  { label: "Query Success Rate", value: "99.8%" },
];

export function DashboardKpis() {
  return (
    <section className="grid gap-4 sm:grid-cols-3">
      {KPI_ITEMS.map((item) => (
        <article
          key={item.label}
          className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
        >
          <p className="text-sm text-slate-500">{item.label}</p>
          <p className="mt-2 text-2xl font-semibold text-slate-900">{item.value}</p>
        </article>
      ))}
    </section>
  );
}

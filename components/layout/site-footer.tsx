export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
        <p className="text-zinc-100">TOOLS FOR MODERN DEVS.</p>
        <p>© 2026 lowish. All rights reserved. {year}</p>
      </div>
    </footer>
  );
}

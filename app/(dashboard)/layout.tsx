import { AppShell } from "@/components/layout/app-shell";

export default function DashboardGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppShell
      title="Search Dashboard"
      description="Modular App Router structure with reusable search utilities"
    >
      {children}
    </AppShell>
  );
}

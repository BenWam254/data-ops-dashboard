import { Header } from "@/components/Header";
import { ClusterTopology } from "@/components/ClusterTopology";
import { MetricsGrid } from "@/components/MetricsGrid";
import { JobConsole } from "@/components/JobConsole";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased">
      <Header />
      <main className="mx-auto max-w-7xl space-y-6 p-6">
        <ClusterTopology />
        <MetricsGrid />
        <JobConsole />
      </main>
    </div>
  );
}
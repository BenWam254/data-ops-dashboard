import React from "react";
import { Server, Database, Cpu, Layers } from "lucide-react";

const nodes = [
  { name: "scraper-engine", role: "ARQ Worker / API", icon: Cpu, status: "Healthy", port: "8000" },
  { name: "scraper-tracker", role: "DuckDB Telemetry Sink", icon: Database, status: "Healthy", port: "8001" },
  { name: "Redpanda Broker", role: "Kafka Stream Topic", icon: Layers, status: "Active", port: "19092" },
  { name: "data-stream-pipeline", role: "Polars Parquet Batcher", icon: Server, status: "Listening", port: "Consumer" },
];

export function ClusterTopology() {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 backdrop-blur-sm">
      <h2 className="mb-4 text-sm font-medium tracking-wide text-zinc-300">CLUSTER TOPOLOGY</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {nodes.map((node) => {
          const Icon = node.icon;
          return (
            <div key={node.name} className="flex flex-col justify-between rounded-lg border border-zinc-800/80 bg-zinc-950/60 p-4">
              <div className="flex items-start justify-between">
                <div className="rounded-md bg-zinc-800/60 p-2 text-purple-400">
                  <Icon className="h-4 w-4" />
                </div>
                <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400 border border-emerald-500/20">
                  {node.status}
                </span>
              </div>
              <div className="mt-3">
                <h3 className="text-sm font-semibold text-zinc-200">{node.name}</h3>
                <p className="text-xs text-zinc-500">{node.role}</p>
              </div>
              <div className="mt-3 text-[11px] font-mono text-zinc-400">
                Port: <span className="text-purple-400">{node.port}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
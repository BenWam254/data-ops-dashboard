import React from "react";
import { Zap, Clock, CheckCircle2, AlertTriangle } from "lucide-react";

export function MetricsGrid() {
  const metrics = [
    { label: "P95 Latency", value: "142.5 ms", change: "-12ms vs avg", icon: Clock, color: "text-blue-400" },
    { label: "Throughput", value: "1,240 events/m", change: "+18%", icon: Zap, color: "text-amber-400" },
    { label: "Success Rate", value: "99.4%", change: "Stable", icon: CheckCircle2, color: "text-emerald-400" },
    { label: "Schema Violations", value: "0 Detected", change: "Guard active", icon: AlertTriangle, color: "text-purple-400" },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((m) => {
        const Icon = m.icon;
        return (
          <div key={m.label} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
            <div className="flex items-center justify-between">
              <span className="text-xs text-zinc-400">{m.label}</span>
              <Icon className={`h-4 w-4 ${m.color}`} />
            </div>
            <div className="mt-2 text-2xl font-bold tracking-tight text-zinc-100">{m.value}</div>
            <div className="mt-1 text-[11px] text-zinc-500">{m.change}</div>
          </div>
        );
      })}
    </div>
  );
}
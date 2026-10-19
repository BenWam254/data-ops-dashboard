import React from "react"
import { Activity, Radio } from "lucide-react";

export function Header() {
    return (
        <header className="border-b border-zinc-800 bg-zinc-950/80 px-6 py-4 backdrop-blur-md">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-600/20 text-purple-400 border border-purple-500/30">
                    <Activity className="h-5 w-5" />
                    </div>
                    <div>
                        <h1 className="text-lg font-semibold tracking-wide text-zinc-100">
                            Data-Ops Control Plane
                        </h1>
                        <p className="text-xs text-zinc-400">
                            Distributed Ingestion & Stream Processing Ecosystem
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emeral-500/10 px-3 py-1 text-xs text-emerald-400">
                    <Radio className="h-3.5 w-3.5 animate-pulse" />
                    <span>System Operational</span>
                </div>
            </div>
        </header>
    );
}
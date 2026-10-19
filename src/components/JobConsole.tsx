"use client";

import React, { useState } from "react";
import { Send, Terminal } from "lucide-react";

export function JobConsole() {
  const [url, setUrl] = useState("");
  const [logs, setLogs] = useState<string[]>([
    "[SYSTEM INITIALIZED] Listening to scraper-tracker REST API...",
    "[REDPANDA] Consumer group 'data-stream-pipeline-group' synced at partition offset 0",
  ]);

  const handleDispatch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    setLogs((prev) => [
      ...prev,
      `[JOB DISPATCH] Submitted scraping payload for target: ${url}`,
      `[ARQ WORKER] Task enqueued into Redis queue 'arq:queue'`,
    ]);
    setUrl("");
  };

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-medium text-zinc-300">
          <Terminal className="h-4 w-4 text-purple-400" />
          <span>REAL-TIME JOB DISPATCH & LOGS</span>
        </div>
      </div>

      <form onSubmit={handleDispatch} className="mb-4 flex gap-2">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter target URL (e.g. https://news.ycombinator.com)"
          className="flex-1 rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm text-zinc-200 placeholder-zinc-600 focus:border-purple-500 focus:outline-none"
        />
        <button
          type="submit"
          className="flex items-center gap-2 rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-purple-500"
        >
          <Send className="h-4 w-4" />
          <span>Dispatch</span>
        </button>
      </form>

      <div className="h-48 overflow-y-auto rounded-lg border border-zinc-800 bg-zinc-950 p-4 font-mono text-xs text-zinc-400">
        {logs.map((log, index) => (
          <div key={index} className="py-0.5">
            <span className="text-zinc-600">{`> `}</span>
            <span className={log.includes("JOB DISPATCH") ? "text-purple-400" : ""}>{log}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
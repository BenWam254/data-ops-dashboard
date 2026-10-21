# data-ops-dashboard

[![CI Pipeline](https://github.com/BenWam254/data-ops-dashboard/actions/workflows/ci.yml/badge.svg)](https://github.com/BenWam254/data-ops-dashboard/actions)
[![Next.js](https://img.shields.io/badge/Next.js-15-black.svg)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![Package Manager](https://img.shields.io/badge/managed%20by-npm-red.svg)](https://www.npmjs.com/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

A modern, high-contrast operational plane UI built to monitor distributed stream health, track web scraper telemetry, and inspect schema drift metrics in real time.

Built with **Next.js 15(App Router)** for server-driven rendering and **Tailwind CSS** styled in a custom **Modern Noir** aesthetic, `data-ops-dashboard` provides system operators with real-time visibility into distributed crawler workloads, DuckDB telemetry logs, and pipeline execution controls.

---

## Features

- **Modern Noir Aesthetic:** High-contrat dark theme featuring electric purple and gold accents, crisps borders, and zero UI bloat.
- **Real-Time Telemetry Cards:** Displays ingestion throughput, HTTP response distributions, worker health, and stream latency metrics.
- **Contract Inspection Panel:** Visualizes active data contracts, schema validation breaches, and drift event history.
- **Control Plane Actions:** Interface controls to trigger scraper retries, pause stream consumption, or query DuckDB metrics.
- **Responsive Next.js 15 App Router:** Clean client/server component separation optimized for desktop workstations and mobile views.

--- 

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **UI Library:** [React 19](https://react.dev/)
- **Language:** [Typescript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Package Manager:** `npm` / `pnpm`

---

## Project Structure

```text
data-ops-dashboard/
├── app/
│   ├── layout.tsx         # Root layout with Modern Noir theme
│   ├── page.tsx           # Primary control plane dashboard
│   ├── metrics/          # Telemetry failure logs & analytics route
│   └── api/               # Proxy API routes to backend services
├── components/            # Reusable UI cards, tables, and badge components
├── public/                # Static assets & icons
├── package.json           # Node dependencies & scripts
├── tailwind.config.ts     # Modern Noir design tokens & color palette
├── .env.example           # Dashboard configuration template
├── .gitignore             # Git ignore configurations
└── README.md              # Documentation
```

## Getting Started

1. ### Prerequisites
Ensure you have Node.js 18.18+ and `npm` installed on your machine.

2. ### Clone the Repository

```bash
git clone [https://github.com/BenWam254/data-ops-dashboard.git](https://github.com/BenWam254/data-ops-dashboard.git)
cd data-ops-dashboard
```

3. ### Environment Setup
Create an `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

4. ### Install Dependencies

```bash
npm install
```

5. ### Development Server
Start the local development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser to explore the operational control plane.


## License
Distributed under the MIT License. See `LICENSE` for more information.

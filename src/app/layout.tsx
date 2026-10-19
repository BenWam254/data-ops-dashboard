import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data-Ops Control Plane",
  description: "Distributed Ingestion & Stream Processing Ecosystem",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
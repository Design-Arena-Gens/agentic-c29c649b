import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Uncensored Agent Design",
  description:
    "Blueprint for a resilient, uncensored AI chat agent with adaptive safety controls and transparent oversight."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

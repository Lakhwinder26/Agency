import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Forma Studio — Digital Product Agency",
  description:
    "We craft purposeful digital experiences — from strategy and design to scalable engineering. A boutique agency for ambitious brands.",
  keywords: ["web agency", "product design", "digital studio", "frontend development"],
  openGraph: {
    title: "Forma Studio — Digital Product Agency",
    description: "Purposeful digital experiences for ambitious brands.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className="w-full min-h-screen antialiased">{children}</body>
    </html>
  );
}

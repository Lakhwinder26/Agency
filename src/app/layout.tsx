import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
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
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}

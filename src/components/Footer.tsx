"use client";

import { motion } from "framer-motion";

const footerColumns = [
  {
    heading: "Agency",
    links: ["About", "Team", "Careers", "Press Kit"],
  },
  {
    heading: "Services",
    links: ["Strategy", "Design", "Development", "Motion"],
  },
  {
    heading: "Work",
    links: ["Case Studies", "Portfolio", "Testimonials", "Awards"],
  },
];

const socials = [
  { label: "Twitter/X", symbol: "𝕏", href: "#" },
  { label: "LinkedIn",  symbol: "in", href: "#" },
  { label: "Dribbble",  symbol: "⚙", href: "#" },
  { label: "GitHub",    symbol: "⌘", href: "#" },
];

export function Footer() {
  return (
    <footer
      className="bg-[var(--text-primary)] border-t border-white/8 pt-16 pb-8"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-[5px] bg-white/10 flex items-center justify-center">
                <span className="text-white/70 text-xs font-bold font-display">F</span>
              </div>
              <span className="font-display text-[15px] text-white/70 font-semibold tracking-tight">
                Forma<span className="text-white/30">Studio</span>
              </span>
            </div>
            <p className="text-xs text-white/35 leading-relaxed max-w-[200px]">
              A boutique digital agency crafting purposeful experiences since 2020.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3 mt-1" role="list" aria-label="Social links">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  role="listitem"
                  whileHover={{ scale: 1.15, backgroundColor: "rgba(255,255,255,.12)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 border border-white/10 flex items-center justify-center text-[10px] text-white/35 transition-colors duration-200"
                >
                  {s.symbol}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs uppercase tracking-widest text-white/30 mb-5 font-medium">
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-3" role="list">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/45 hover:text-white/80 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-white/8 mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Forma Studio LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Use", "Cookie Settings"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-white/25 hover:text-white/50 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

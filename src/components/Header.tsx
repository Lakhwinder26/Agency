"use client";

import { useScrollBlur } from "@/hooks/useScrollBlur";
import { motion } from "framer-motion";

const navLinks = ["Work", "Services", "Process", "About", "Contact"];

export function Header() {
  useScrollBlur();

  return (
    <header
      id="site-header"
      className="
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300 ease-out
        data-[scrolled=true]:backdrop-blur-xl
        data-[scrolled=true]:bg-white/80
        data-[scrolled=true]:border-b
        data-[scrolled=true]:border-[var(--border)]
        data-[scrolled=true]:shadow-sm
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center gap-2"
        >
          {/* Logo mark */}
          <div className="w-7 h-7 bg-[var(--text-primary)] flex items-center justify-center">
            <span className="text-white text-xs font-bold font-display">F</span>
          </div>
          <span className="font-display font-700 text-[15px] tracking-tight text-[var(--text-primary)]">
            Forma<span className="text-[var(--text-muted)]">Studio</span>
          </span>
        </motion.div>

        {/* Nav links */}
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="hidden md:flex items-center gap-7"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="
                text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)]
                transition-colors duration-200 relative group
              "
            >
              {link}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[var(--text-primary)] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </motion.nav>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="
              inline-flex items-center gap-2 px-4 py-2 text-sm font-medium
              border border-[var(--text-primary)]
              text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-white
              transition-all duration-250 cursor-pointer
            "
          >
            Start a project
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </header>
  );
}

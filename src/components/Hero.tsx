"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { SkeletonBlock, SkeletonText } from "./ui/SkeletonBlock";

/* ── Animated orbital graphic ── */
function OrbitGraphic() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-200, 200], [8, -8]), {
    stiffness: 120,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-8, 8]), {
    stiffness: 120,
    damping: 22,
  });

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
    };
    const reset = () => { mouseX.set(0); mouseY.set(0); };
    el.addEventListener("mousemove", handler);
    el.addEventListener("mouseleave", reset);
    return () => { el.removeEventListener("mousemove", handler); el.removeEventListener("mouseleave", reset); };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={containerRef}
      style={{ rotateX, rotateY, perspective: 800 }}
      className="relative w-full aspect-square max-w-[420px] mx-auto cursor-none"
      aria-hidden="true"
    >
      {/* Outer ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border border-dashed border-[var(--border)]"
      />
      {/* Middle ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[14%] rounded-full border border-[var(--border)]"
      />
      {/* Inner ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[30%] rounded-full border border-dashed border-[var(--border-hover)]"
      />

      {/* Center blob */}
      <motion.div
        animate={{ scale: [1, 1.06, 1], opacity: [0.5, 0.75, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-[38%] rounded-full bg-[var(--shimmer-base)]"
      />

      {/* Orbiting dots */}
      {[0, 120, 240].map((deg, i) => (
        <motion.div
          key={i}
          animate={{ rotate: 360 }}
          transition={{ duration: 18 + i * 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[14%] rounded-full"
        >
          <div
            className="absolute w-2.5 h-2.5 rounded-full bg-[var(--text-primary)] opacity-25"
            style={{
              top: "50%",
              left: "50%",
              transform: `rotate(${deg}deg) translateX(calc(50% + 30px)) translateY(-50%)`,
            }}
          />
        </motion.div>
      ))}

      {/* Corner skeleton cards */}
      {[
        { top: "4%", left: "4%", w: "34%", h: "22%" },
        { bottom: "4%", right: "4%", w: "38%", h: "18%" },
        { bottom: "8%", left: "2%", w: "28%", h: "12%" },
      ].map((pos, i) => (
        <motion.div
          key={i}
          style={pos as React.CSSProperties}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3 + i * 0.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
          className="absolute shimmer rounded-[var(--radius-md)]"
        />
      ))}
    </motion.div>
  );
}

/* ── Hero Section ── */
export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center"
      aria-label="Hero"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Copy */}
        <div className="flex flex-col gap-8">
          {/* Pill label */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-[var(--border)] text-xs text-[var(--text-muted)] bg-white/60 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Currently accepting projects · Q3 2026
            </span>
          </motion.div>

          {/* Headline skeleton blocks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-3"
          >
            <SkeletonBlock height="72px" rounded="md" className="w-full" />
            <SkeletonBlock height="72px" rounded="md" className="w-[82%]" />
            <SkeletonBlock height="72px" rounded="md" className="w-[60%]" />
          </motion.div>

          {/* Subtext */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: "easeOut" }}
          >
            <SkeletonText lines={3} className="max-w-sm" />
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34, ease: "easeOut" }}
            className="flex items-center gap-4 flex-wrap"
          >
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 8px 28px rgba(0,0,0,.14)" }}
              whileTap={{ scale: 0.97 }}
              id="hero-cta-primary"
              className="
                px-7 py-3.5 text-sm font-medium
                bg-[var(--text-primary)] text-white
                transition-shadow duration-250 cursor-pointer
              "
            >
              View our work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              id="hero-cta-secondary"
              className="
                px-7 py-3.5 text-sm font-medium
                border border-[var(--border)] text-[var(--text-primary)]
                hover:border-[var(--border-hover)] transition-colors duration-250 cursor-pointer
                bg-white/60 backdrop-blur-sm
              "
            >
              Start a project →
            </motion.button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-8 pt-2"
          >
            {[["80+", "Projects"], ["6yr", "Founded"], ["98%", "Satisfaction"]].map(([val, label]) => (
              <div key={label} className="flex flex-col">
                <span className="font-display text-xl font-semibold text-[var(--text-primary)]">{val}</span>
                <span className="text-xs text-[var(--text-muted)]">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <OrbitGraphic />
        </motion.div>
      </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-[10px] tracking-widest uppercase text-[var(--text-muted)]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[var(--border-hover)] to-transparent"
        />
      </motion.div>
    </section>
  );
}

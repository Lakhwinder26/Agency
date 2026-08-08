"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedSection } from "./ui/AnimatedSection";
import { SkeletonBlock, SkeletonText } from "./ui/SkeletonBlock";

const steps = [
  {
    id: "step-discovery",
    number: "01",
    label: "Discovery",
    description: "Stakeholder interviews, market research, technical audit.",
    icon: "○",
  },
  {
    id: "step-design",
    number: "02",
    label: "Design",
    description: "Wireframes, visual language, interactive prototypes.",
    icon: "◎",
  },
  {
    id: "step-development",
    number: "03",
    label: "Development",
    description: "Clean, scalable code with CI/CD and quality assurance.",
    icon: "◉",
  },
  {
    id: "step-launch",
    number: "04",
    label: "Launch",
    description: "Staged rollout, monitoring, and iterative improvements.",
    icon: "●",
  },
];

function StepCard({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      id={step.id}
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.14, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col gap-4"
    >
      {/* Number + connector */}
      <div className="flex items-center gap-4">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.14 + 0.1 }}
          className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-[var(--border)] bg-white flex items-center justify-center text-xs font-semibold text-[var(--text-muted)] font-display"
        >
          {step.number}
        </motion.div>

        {/* Connector line (not on last) */}
        {index < steps.length - 1 && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.14 + 0.25, ease: "easeOut" }}
            className="hidden lg:block flex-1 h-px bg-[var(--border)] origin-left"
          />
        )}
      </div>

      {/* Card */}
      <motion.div
        whileHover={{ y: -4, borderColor: "var(--border-hover)", boxShadow: "var(--shadow-md)" }}
        transition={{ duration: 0.2 }}
        className="p-5 rounded-[var(--radius-lg)] border border-[var(--border)] bg-white flex flex-col gap-4 h-full"
      >
        {/* Icon shimmer */}
        <div className="w-9 h-9 rounded-[var(--radius-sm)] shimmer flex items-center justify-center text-base text-[var(--text-muted)]">
          {step.icon}
        </div>

        <div>
          <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-1">{step.label}</h3>
          <p className="text-xs text-[var(--text-muted)] leading-relaxed">{step.description}</p>
        </div>

        {/* Skeleton detail rows */}
        <SkeletonText lines={2} />
      </motion.div>
    </motion.div>
  );
}

export function Process() {
  return (
    <section
      id="process"
      className="py-28 max-w-7xl mx-auto px-6"
      aria-labelledby="process-heading"
    >
      {/* Header */}
      <AnimatedSection className="mb-16">
        <p className="text-xs tracking-widest uppercase text-[var(--text-muted)] mb-3">
          How we work
        </p>
        <h2
          id="process-heading"
          className="font-display text-4xl lg:text-5xl font-semibold text-[var(--text-primary)]"
        >
          Our process
        </h2>
      </AnimatedSection>

      {/* Steps grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <StepCard key={step.id} step={step} index={i} />
        ))}
      </div>

      {/* Timeline skeleton bars */}
      <AnimatedSection className="mt-12 pt-8 border-t border-[var(--border)]" delay={0.4}>
        <div className="flex items-center gap-3">
          {[28, 18, 36, 18].map((pct, i) => (
            <SkeletonBlock
              key={i}
              height="8px"
              rounded="full"
              className="flex-shrink-0"
              style={{ width: `${pct}%` }}
            />
          ))}
        </div>
        <p className="text-xs text-[var(--text-muted)] mt-2">Typical project timeline — 8–16 weeks</p>
      </AnimatedSection>
    </section>
  );
}

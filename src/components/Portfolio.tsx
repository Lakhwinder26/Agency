"use client";

import { motion } from "framer-motion";
import { AnimatedSection, containerVariants, itemVariants } from "./ui/AnimatedSection";
import { SkeletonBlock } from "./ui/SkeletonBlock";

const projects = [
  { id: "proj-1", aspect: "aspect-[4/3]", label: "E-commerce Redesign", tag: "Design · Dev", wide: false },
  { id: "proj-2", aspect: "aspect-[3/4]", label: "SaaS Dashboard", tag: "Product · Motion", wide: false },
  { id: "proj-3", aspect: "aspect-[16/9]", label: "Brand Identity System", tag: "Brand · Strategy", wide: true },
  { id: "proj-4", aspect: "aspect-[4/3]", label: "Mobile App UI", tag: "Design · Prototype", wide: false },
  { id: "proj-5", aspect: "aspect-[4/3]", label: "Marketing Website", tag: "Dev · CMS", wide: false },
];

function PortfolioCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <motion.article
      id={project.id}
      variants={itemVariants}
      whileHover="hover"
      className={`group relative rounded-[var(--radius-lg)] overflow-hidden border border-[var(--border)] bg-white cursor-pointer ${project.wide ? "col-span-full sm:col-span-2" : ""}`}
    >
      {/* Image placeholder */}
      <motion.div
        variants={{ hover: { scale: 1.02 } }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`${project.aspect} shimmer w-full`}
      />

      {/* Overlay on hover */}
      <motion.div
        variants={{ hover: { opacity: 1 } }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="absolute inset-0 bg-[var(--text-primary)]/8 backdrop-blur-[1px]"
      />

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] uppercase tracking-widest text-[var(--text-muted)]">
            {project.tag}
          </span>
          <span className="text-sm font-medium text-[var(--text-primary)]">
            {project.label}
          </span>
        </div>
        <motion.span
          variants={{ hover: { x: 0, opacity: 1 } }}
          initial={{ x: -6, opacity: 0 }}
          className="text-xs text-[var(--text-muted)] flex items-center gap-1"
        >
          View
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
            <path d="M2 8L8 2M8 2H3.5M8 2V6.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
          </svg>
        </motion.span>
      </div>
    </motion.article>
  );
}

export function Portfolio() {
  return (
    <section
      id="work"
      className="py-28 bg-[var(--surface)] border-y border-[var(--border)]"
      aria-labelledby="portfolio-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-xs tracking-widest uppercase text-[var(--text-muted)] mb-3">
                Selected work
              </p>
              <h2
                id="portfolio-heading"
                className="font-display text-4xl lg:text-5xl font-semibold text-[var(--text-primary)]"
              >
                Recent projects
              </h2>
            </div>
            <a
              href="#"
              className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] underline underline-offset-4 transition-colors duration-200"
            >
              See all work →
            </a>
          </div>
        </AnimatedSection>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {projects.map((proj) => (
            <PortfolioCard key={proj.id} project={proj} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

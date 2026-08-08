"use client";

import { motion } from "framer-motion";
import { AnimatedSection, containerVariants, itemVariants } from "./ui/AnimatedSection";
import { SkeletonBlock, SkeletonText } from "./ui/SkeletonBlock";

const services = [
  {
    id: "svc-strategy",
    icon: "◈",
    label: "Strategy & Discovery",
    color: "from-slate-100 to-stone-50",
  },
  {
    id: "svc-design",
    icon: "◎",
    label: "Product Design",
    color: "from-stone-100 to-slate-50",
  },
  {
    id: "svc-engineering",
    icon: "◉",
    label: "Engineering",
    color: "from-zinc-100 to-slate-50",
  },
  {
    id: "svc-motion",
    icon: "◑",
    label: "Motion & Brand",
    color: "from-slate-100 to-zinc-50",
  },
  {
    id: "svc-cms",
    icon: "◐",
    label: "CMS & Content",
    color: "from-stone-100 to-zinc-50",
  },
  {
    id: "svc-growth",
    icon: "◓",
    label: "Growth & Analytics",
    color: "from-zinc-100 to-stone-50",
  },
];

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  return (
    <motion.article
      id={service.id}
      variants={itemVariants}
      whileHover={{
        y: -5,
        boxShadow: "var(--shadow-lift)",
        borderColor: "var(--border-hover)",
      }}
      transition={{ duration: 0.25 }}
      className="
        group relative p-6 rounded-[var(--radius-lg)]
        border border-[var(--border)] bg-white
        cursor-default overflow-hidden
      "
    >
      {/* Subtle bg gradient on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none`}
      />

      {/* Icon container */}
      <div className="relative mb-5">
        <div className="w-11 h-11 rounded-[var(--radius-sm)] shimmer flex items-center justify-center text-lg text-[var(--text-muted)]">
          {service.icon}
        </div>
      </div>

      {/* Label */}
      <h3 className="relative text-sm font-semibold text-[var(--text-primary)] mb-4">
        {service.label}
      </h3>

      {/* Skeleton body text */}
      <SkeletonText lines={3} className="relative" />

      {/* Footer pill */}
      <div className="relative mt-5">
        <SkeletonBlock height="24px" width="40%" rounded="full" />
      </div>
    </motion.article>
  );
}

export function Services() {
  return (
    <section
      id="services"
      className="w-full py-28"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <AnimatedSection className="mb-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <p className="text-xs tracking-widest uppercase text-[var(--text-muted)] mb-3">
              Our capabilities
            </p>
            <h2
              id="services-heading"
              className="font-display text-4xl lg:text-5xl font-semibold text-[var(--text-primary)]"
            >
              What we
              <br />
              build for you
            </h2>
          </div>
          <SkeletonText lines={3} className="max-w-xs" />
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
        {services.map((svc) => (
          <ServiceCard key={svc.id} service={svc} />
        ))}
      </motion.div>
      </div>
    </section>
  );
}

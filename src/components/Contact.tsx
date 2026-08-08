"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "./ui/AnimatedSection";
import { SkeletonBlock } from "./ui/SkeletonBlock";

function InputField({
  id,
  label,
  multiline = false,
}: {
  id: string;
  label: string;
  multiline?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider">
        {label}
      </label>
      {multiline ? (
        <motion.textarea
          id={id}
          rows={4}
          whileFocus={{ borderColor: "var(--text-primary)", boxShadow: "0 0 0 3px rgba(26,26,24,.06)" }}
          placeholder="Tell us about your project, goals, and timeline..."
          className="
            w-full px-4 py-3 text-sm
            border border-[var(--border)] rounded-[var(--radius-md)]
            bg-white text-[var(--text-primary)]
            placeholder:text-[var(--border-hover)]
            focus:outline-none transition-all duration-200
            resize-none
          "
        />
      ) : (
        <motion.input
          id={id}
          type={id === "email" ? "email" : "text"}
          whileFocus={{ borderColor: "var(--text-primary)", boxShadow: "0 0 0 3px rgba(26,26,24,.06)" }}
          placeholder={`Your ${label.toLowerCase()}...`}
          className="
            w-full px-4 py-3 text-sm
            border border-[var(--border)] rounded-[var(--radius-md)]
            bg-white text-[var(--text-primary)]
            placeholder:text-[var(--border-hover)]
            focus:outline-none transition-all duration-200
          "
        />
      )}
    </div>
  );
}

export function Contact() {
  return (
    <section
      id="contact"
      className="py-28 bg-[var(--text-primary)]"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Copy */}
          <AnimatedSection>
            <p className="text-xs tracking-widest uppercase text-white/40 mb-4">
              Let's collaborate
            </p>
            <h2
              id="contact-heading"
              className="font-display text-4xl lg:text-5xl font-semibold text-white mb-6"
            >
              Have a project
              <br />
              in mind?
            </h2>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs mb-10">
              We partner with ambitious teams to bring exceptional digital products to life. Let's talk.
            </p>

            {/* Contact details skeleton */}
            <div className="flex flex-col gap-4">
              {["hello@formastudio.io", "+1 (555) 000-0000", "San Francisco, CA"].map((detail, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center">
                    <span className="text-white/30 text-xs">{["@", "☏", "⌖"][i]}</span>
                  </div>
                  <span className="text-sm text-white/50">{detail}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right: Form */}
          <AnimatedSection delay={0.15}>
            <form
              className="flex flex-col gap-5 p-8 rounded-[var(--radius-lg)] bg-white/5 border border-white/10 backdrop-blur-sm"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Contact form"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <InputField id="name" label="Name" />
                <InputField id="email" label="Email" />
              </div>
              <InputField id="company" label="Company" />
              <InputField id="brief" label="Project Brief" multiline />

              {/* Budget selector skeleton */}
              <div className="flex flex-col gap-2">
                <span className="text-xs font-medium text-[var(--text-muted)]/60 uppercase tracking-wider text-white/40">
                  Budget Range
                </span>
                <div className="flex flex-wrap gap-2">
                  {["< $10k", "$10–25k", "$25–50k", "$50k+"].map((b) => (
                    <motion.button
                      key={b}
                      type="button"
                      whileHover={{ backgroundColor: "rgba(255,255,255,0.12)" }}
                      whileTap={{ scale: 0.96 }}
                      className="px-4 py-2 rounded-full border border-white/15 text-xs text-white/50 transition-colors duration-200 cursor-pointer"
                    >
                      {b}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                id="contact-submit"
                whileHover={{ scale: 1.02, boxShadow: "0 8px 28px rgba(255,255,255,.1)" }}
                whileTap={{ scale: 0.98 }}
                className="
                  mt-2 w-full py-3.5 rounded-full text-sm font-medium
                  bg-white text-[var(--text-primary)]
                  transition-shadow duration-250 cursor-pointer
                "
              >
                Send project brief →
              </motion.button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

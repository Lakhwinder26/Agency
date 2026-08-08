"use client";

import { useEffect, useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

export function useScrollBlur() {
  const scrolled = useRef(false);

  useEffect(() => {
    const header = document.getElementById("site-header");
    if (!header) return;

    const handler = () => {
      const past = window.scrollY > 20;
      if (past !== scrolled.current) {
        scrolled.current = past;
        header.setAttribute("data-scrolled", String(past));
      }
    };

    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
}

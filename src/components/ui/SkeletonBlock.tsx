"use client";

import React from "react";

interface SkeletonBlockProps {
  className?: string;
  rounded?: "sm" | "md" | "lg" | "full";
  height?: string;
  width?: string;
  style?: React.CSSProperties;
}

const roundedMap = {
  sm: "rounded-[var(--radius-sm)]",
  md: "rounded-[var(--radius-md)]",
  lg: "rounded-[var(--radius-lg)]",
  full: "rounded-full",
};

export function SkeletonBlock({
  className = "",
  rounded = "sm",
  height,
  width,
  style,
}: SkeletonBlockProps) {
  return (
    <div
      className={`shimmer ${roundedMap[rounded]} ${className}`}
      style={{ height, width, ...style }}
      aria-hidden="true"
    />
  );
}

/** A stack of skeleton text bars simulating a paragraph */
export function SkeletonText({
  lines = 3,
  className = "",
}: {
  lines?: number;
  className?: string;
}) {
  const widths = ["100%", "88%", "74%", "92%", "60%"];
  return (
    <div className={`flex flex-col gap-2 ${className}`} aria-hidden="true">
      {Array.from({ length: lines }).map((_, i) => (
        <SkeletonBlock
          key={i}
          height="12px"
          width={widths[i % widths.length]}
          rounded="full"
        />
      ))}
    </div>
  );
}

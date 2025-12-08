 "use client";

import { type PropsWithChildren } from "react";
import { useInView } from "@/lib/useInView";

type SectionProps = PropsWithChildren<{
  id?: string;
  className?: string;
  withPadding?: boolean;
}>;

export function Section({ children, id, className = "", withPadding = true }: SectionProps) {
  const { ref, visible } = useInView<HTMLDivElement>();
  return (
    <section
      id={id}
      ref={ref}
      className={`fade-section ${visible ? "visible" : ""} ${withPadding ? "py-16 sm:py-20" : ""} ${className}`}
    >
      {children}
    </section>
  );
}


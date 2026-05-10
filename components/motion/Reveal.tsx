"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-64px 0px" });
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: prefersReduced ? 0 : 12 }}
      animate={
        isInView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: prefersReduced ? 0 : 12 }
      }
      transition={{
        duration: 0.5,
        delay,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      }}
    >
      {children}
    </motion.div>
  );
}
